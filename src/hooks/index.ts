import React from 'react';

/**
 * 外部暴露的ref和本地使用的ref是同一个时的样板代码
 * @param ref React.forwardRef  外部消费的ref
 * @param localRef 内部使用的ref
 * @returns 返回值直接传入组件内部具体节点的ref中
 */
export const useGetRef = <T>(
  ref: React.ForwardedRef<T>,
  localRef: React.MutableRefObject<T | null>,
) => {
  return (instance: T | null) => {
    localRef.current = instance;
    if (!ref) {
      return;
    }
    if ('current' in ref) {
      ref.current = instance;
    } else {
      ref(instance);
    }
  };
};
