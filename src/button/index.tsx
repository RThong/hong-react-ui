import React, { CSSProperties, useEffect, useState } from 'react';
import classnames from 'classnames';
import './index.less';
import { createScopedClasses } from '@/utils';

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<any>, 'type'> {
  // icon:
  // position:
  type?: 'default' | 'primary' | 'ghost' | 'dashed' | 'danger' | 'link';
  // size:
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
  const { type, className, style, children } = props;

  return (
    <button
      className={classnames(sc(), {
        [sc(type)]: !!type,
      })}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
