import React, { CSSProperties, useEffect, useState } from 'react';
import classnames from 'classnames';
import './index.less';
import { createScopedClasses } from '@/utils';

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<any>, 'type'> {
  // icon:
  // position:
  /**
   * @description       设置按钮类型
   * @default           default
   */
  type?: 'default' | 'primary' | 'dashed' | 'text' | 'link';

  /**
   * @description       设置按钮大小
   * @default           middle
   */
  size?: 'large' | 'middle' | 'small';
  // loading:
  // disabled:
  // ghost:
  // htmlType:
  // onClick:
  className?: string;
  style?: CSSProperties;
}

const sc = createScopedClasses('btn');

const Button: React.FC<ButtonProps> = (props) => {
  const { type, size, className, style, children, ...rest } = props;

  return (
    <button
      className={classnames(sc(), {
        [sc(type)]: !!type,
        [sc(size)]: size && size !== 'middle',
      })}
      style={style}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;