import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import { createScopedClasses } from '@/utils';

interface TransitionProps {
  beforeEnter: React.CSSProperties;
  afterEnter: React.CSSProperties;
  beforeLeave: React.CSSProperties;
  afterLeave: React.CSSProperties;
  leave: React.CSSProperties;
  visible: boolean;
  transitionActive?: React.CSSProperties;
  children?: (
    props: {
      visible?: boolean;
      className?: string;
      style?: React.CSSProperties;
      [key: string]: any;
    },
    ref: (node: any) => void,
  ) => React.ReactElement;
  afterClose?: () => void;
}

const sc = createScopedClasses('transition');

enum Status {
  beforeEnter = 'beforeEnter',
  activeEnter = 'activeEnter',
  afterEnter = 'afterEnter',
  beforeLeave = 'beforeLeave',
  activeLeave = 'activeLeave',
  afterLeave = 'afterLeave',
}

const Transition = (props: TransitionProps) => {
  const {
    children,
    beforeEnter,
    afterEnter,
    beforeLeave,
    afterLeave,
    transitionActive = {
      transition: 'all 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0s',
    },
    leave,
    visible,
    afterClose,
  } = props;

  const [animationVisible, setAnimationVisible] = useState(visible);

  const [contentStyle, setContentStyle] = useState<React.CSSProperties>({});

  const ref = useRef<HTMLDivElement>(null);
  const statusRef = useRef<Status>();

  useEffect(() => {
    visible && setAnimationVisible(visible);
  }, [visible]);

  useEffect(() => {
    if (visible) {
      setContentStyle({
        transition: '',
        ...(beforeEnter || {}),
      });
      // 标记进入动画前
      statusRef.current = Status.beforeEnter;
    }
  }, [visible, beforeEnter]);

  useEffect(() => {
    if (statusRef.current === Status.beforeEnter) {
      setTimeout(() => {
        setContentStyle({
          ...transitionActive,
          ...(afterEnter || {}),
        });
        statusRef.current = Status.activeEnter;
      }, 16);
    }
  }, [afterEnter, transitionActive]);

  useEffect(() => {
    if (statusRef.current === Status.afterEnter) {
      console.log('beforeLeave');
      // setTimeout(() => {
      setContentStyle({
        transition: '',
        ...(beforeLeave || {}),
      });
      statusRef.current = Status.beforeLeave;
      // }, 16);
    }
  }, [beforeLeave]);

  useEffect(() => {
    console.log('afterLeave', statusRef.current);
    if (
      statusRef.current === Status.beforeLeave ||
      (statusRef.current === Status.afterEnter && !beforeLeave)
    ) {
      setTimeout(() => {
        setContentStyle({
          ...transitionActive,
          ...(afterLeave || {}),
        });
        statusRef.current = Status.activeLeave;
      }, 16);
    }
  }, [afterLeave, beforeLeave, transitionActive]);

  useEffect(() => {
    const fn = () => {
      if (statusRef.current === Status.activeEnter) {
        statusRef.current = Status.afterEnter;
      }

      if (statusRef.current === Status.activeLeave) {
        statusRef.current = Status.afterLeave;
        setAnimationVisible(false);
      }
    };
    const aaa = ref.current;

    aaa?.addEventListener('transitionend', fn);
    return () => {
      aaa?.removeEventListener('transitionend', fn);
    };
  }, [visible]);

  return children(
    {
      // className: classnames(sc()),
      style: {
        ...contentStyle,
        display: animationVisible ? undefined : 'none',
      },
    },
    ref,
  );
};

export default Transition;
