import { createScopedClasses } from '@/utils';
import classnames from 'classnames';
import React from 'react';

const sc = createScopedClasses('spin');

type Size = 'middle' | 'small' | 'large';

export interface SpinProps {
  size: Size;
  style: React.CSSProperties;
}

const SIZE_MAP = {
  middle: '',
  small: 'sm',
  large: 'lg',
};

const Spin: React.FC<SpinProps> = (props) => {
  const { size = 'middle', style, children } = props;

  const renderSpin = () => {
    return (
      <div
        className={classnames(sc(), sc('spinning'), sc(SIZE_MAP[size]))}
        style={style}
      >
        <span className={classnames(sc('dot'), sc('dot-spin'))}>
          <i className={classnames(sc('dot-item'))} />
          <i className={classnames(sc('dot-item'))} />
          <i className={classnames(sc('dot-item'))} />
          <i className={classnames(sc('dot-item'))} />
        </span>
      </div>
    );
  };

  if (children) {
    return (
      <div className={classnames(sc('nested-loading'))}>
        <div>{renderSpin()}</div>
        <div className={classnames(sc('container'), sc('blur'))}>
          {children}
        </div>
      </div>
    );
  }
  return renderSpin();
};

export default Spin;
