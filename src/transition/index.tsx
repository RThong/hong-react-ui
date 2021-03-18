import React, { useEffect, useRef, useState } from 'react';

export interface TransitionProps {
  beforeEnter?: React.CSSProperties;
  afterEnter: React.CSSProperties;
  beforeLeave?: React.CSSProperties;
  afterLeave?: React.CSSProperties;
  visible: boolean;
  transitionActive?: React.CSSProperties;
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
    transitionActive = {
      transition: 'all .3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s',
    },
    visible,
    afterClose,
  } = props;

  // 控制动画结束后元素的隐藏
  const [animationVisible, setAnimationVisible] = useState(visible);

  const [contentStyle, setContentStyle] = useState<React.CSSProperties>({});

  // 大概率是HTMLElement
  const ref = useRef<any>(null);
  const statusRef = useRef<Status>();

  const afterCloseRef = useRef<(() => void) | undefined>(afterClose);

  useEffect(() => {
    visible && setAnimationVisible(visible);
  }, [visible]);

  // 当开始动画前  直接给元素设置beforeEnter的样式
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

  // 当前是进入动画前状态  设置afterEnter样式让动画开始   并标记activeEnter状态
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

  // 进场动画结束  设置退场动画初始样式  标记beforeLeave
  useEffect(() => {
    if (statusRef.current === Status.afterEnter) {
      console.log('beforeLeave');
      setContentStyle({
        transition: '',
        ...(beforeLeave || {}),
      });
      statusRef.current = Status.beforeLeave;
    }
  }, [beforeLeave]);

  // 如果没有传入beforeLeave 也就不会到对应的状态
  // 所以在当前是beforeLeave状态时开始执行退场动画
  // 在当前是afterEnter并且没传入beforeLeave时也去执行退场动画
  useEffect(() => {
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
    const transitionCb = () => {
      // 进场动画结束
      if (statusRef.current === Status.activeEnter) {
        statusRef.current = Status.afterEnter;
      }

      // 退场动画结束
      if (statusRef.current === Status.activeLeave) {
        statusRef.current = Status.afterLeave;
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
  }, []);

  return children
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

export default Transition;
