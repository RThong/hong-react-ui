import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import { createScopedClasses } from '@/utils';

interface TransitionProps {
  enter: React.CSSProperties;
  leave: React.CSSProperties;
  visible: boolean;
  children?: (
    props: {
      visible?: boolean;
      className?: string;
      style?: React.CSSProperties;
      [key: string]: any;
    },
    ref: (node: any) => void,
  ) => React.ReactElement;
}

const sc = createScopedClasses('transition');

const Transition = (props: TransitionProps) => {
  const { children, enter, leave, visible } = props;

  const [animationVisible, setAnimationVisible] = useState(visible);

  const [contentStyle, setContentStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    visible && setAnimationVisible(visible);
  }, [visible]);

  useEffect(() => {
    setTimeout(() => {
      setContentStyle(visible ? enter : leave);
    }, 16);
  }, [visible, enter, leave]);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = () => {
      // setAnimationVisible(false);
      console.log('【visible】', visible);
      if (!visible) {
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
      className: classnames(sc()),
      style: {
        ...contentStyle,
        display: animationVisible ? undefined : 'none',
      },
    },
    ref,
  );
};

export default Transition;
