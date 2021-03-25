import { createScopedClasses } from '@/utils';
import classnames from 'classnames';
import React from 'react';

import './index.less';

const sc = createScopedClasses('spin');

type Size = 'middle' | 'small' | 'large';

export interface SpinProps {
  /**
   * @description       组件大小，可选值为 `small` `default` `large`
   * @default           default
   */
  size?: Size;
  /**
   * @description       是否为加载中状态
   * @default           true
   */
  spinning?: boolean;
  /**
   * @description       当作为包裹元素时，可以自定义描述文案
   */
  tip?: React.ReactNode;
  /**
   * @description       包装器的类属性
   */
  wrapperClassName?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SIZE_MAP = {
  middle: '',
  small: 'sm',
  large: 'lg',
};

const Spin: React.FC<SpinProps> = (props) => {
  const {
    size = 'middle',
    style,
    children,
    spinning = true,
    tip,
    wrapperClassName,
    className,
  } = props;

  const renderSpin = () => {
    return (
      <div
        className={classnames(
          sc(),
          sc('spinning'),
          {
            [sc(SIZE_MAP[size])]: size !== 'middle',
            [sc('show-text')]: tip,
          },
          className,
        )}
        style={style}
      >
        <span className={classnames(sc('dot'), sc('dot-spin'))}>
          <i className={classnames(sc('dot-item'))} />
          <i className={classnames(sc('dot-item'))} />
          <i className={classnames(sc('dot-item'))} />
          <i className={classnames(sc('dot-item'))} />
        </span>
        {tip && <div className={classnames(sc('text'))}>{tip}</div>}
      </div>
    );
  };

  if (children) {
    return (
      <div className={classnames(sc('nested-loading'), wrapperClassName)}>
        {spinning && <div>{renderSpin()}</div>}
        <div
          className={classnames(sc('container'), { [sc('blur')]: spinning })}
        >
          {children}
        </div>
      </div>
    );
  }
  return renderSpin();
};

export default Spin;
