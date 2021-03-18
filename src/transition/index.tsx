import React, { useEffect, useRef, useState } from 'react';

export interface TransitionProps {
  beforeEnter?: React.CSSProperties;
  afterEnter: React.CSSProperties;
  beforeLeave?: React.CSSProperties;
  afterLeave?: React.CSSProperties;
  visible: boolean;
  transitionActive?: React.CSSProperties;
  removeOnLeave?: boolean;
  children?: (
    props: {
      visible?: boolean;
      className?: string;
      style?: React.CSSProperties;
      [key: string]: any;
    },
    ref: any,
  ) => React.ReactElement;
  afterClose?: () => void;
}

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
    transitionActive,
    visible,
    removeOnLeave = true,
    afterClose,
  } = props;

  // 控制动画结束后元素的隐藏
  const [animationVisible, setAnimationVisible] = useState(visible);

  const [contentStyle, setContentStyle] = useState<React.CSSProperties>({});

  const [status, setStatus] = useState<Status>();

  // 大概率是HTMLElement
  const ref = useRef<any>(null);

  const afterCloseRef = useRef<(() => void) | undefined>(afterClose);

  const transitionStyleRef = useRef(transitionActive);

  const beforeEnterRef = useRef(beforeEnter);
  const afterEnterRef = useRef(afterEnter);
  const beforeLeaveRef = useRef(beforeLeave);
  const afterLeaveRef = useRef(afterLeave);

  useEffect(() => {
    if (visible) {
      console.log('【beforeEnter】');

      setContentStyle({
        transition: '',
        ...(beforeEnterRef.current || {}),
      });
      setAnimationVisible(visible);
      setStatus(Status.beforeEnter);
    }
  }, [visible]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (status === Status.beforeEnter && visible) {
      console.log('【activeEnter】');

      timer = setTimeout(() => {
        setContentStyle({
          ...transitionStyleRef.current,
          ...(afterEnterRef.current || {}),
        });
        setStatus(Status.activeEnter);
      }, 16);
    }

    return () => {
      timer && clearTimeout(timer);
    };
  }, [status, visible]);

  useEffect(() => {
    if (status === Status.afterEnter && beforeLeaveRef.current && !visible) {
      console.log('【beforeLeave】');

      setContentStyle({
        transition: '',
        ...(beforeLeaveRef.current || {}),
      });
      setStatus(Status.beforeLeave);
    }
  }, [status, visible]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (
      (status === Status.beforeLeave && beforeLeaveRef.current && !visible) ||
      (status === Status.afterEnter && !beforeLeaveRef.current && !visible)
    ) {
      console.log('【activeLeave】');

      timer = setTimeout(() => {
        setContentStyle({
          ...transitionStyleRef.current,
          ...(afterLeaveRef.current || {}),
        });
        setStatus(Status.activeLeave);
      }, 16);
    }

    return () => {
      timer && clearTimeout(timer);
    };
  }, [status, visible]);

  useEffect(() => {
    const transitionCb = () => {
      // 进场动画结束
      if (status === Status.activeEnter) {
        console.log('【afterEnter】');
        setStatus(Status.afterEnter);
      }

      // 退场动画结束
      if (status === Status.activeLeave) {
        console.log('【afterLeave】');

        setStatus(Status.afterLeave);
        setContentStyle({});
        setAnimationVisible(false);
        afterCloseRef.current?.();
      }
    };
    const target = ref.current;

    target?.addEventListener('transitionend', transitionCb);
    return () => {
      target?.removeEventListener('transitionend', transitionCb);
    };
  }, [status]);

  return children && ((removeOnLeave && animationVisible) || !removeOnLeave)
    ? children(
        {
          style: {
            ...contentStyle,
            display: animationVisible ? undefined : 'none',
          },
        },
        ref,
      )
    : null;
};

Transition.defaultProps = {
  transitionActive: {
    transition: 'all .3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s',
  },
};

export default Transition;
