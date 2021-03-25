import { createScopedClasses } from '@/utils';
import classnames from 'classnames';
import React from 'react';

import './index.less';

const sc = createScopedClasses('space');

export interface SpaceProps {
  direction?: 'vertical' | 'horizontal';
  align?: 'start' | 'end' | 'center' | 'baseline';
  size?: 'small' | 'middle' | 'large' | number;
  split?: React.ReactNode;
}

const SIZE_MAP = {
  small: 8,
  middle: 16,
  large: 24,
};

const Space: React.FC<SpaceProps> = (props) => {
  const {
    children,
    direction = 'horizontal',
    size = 'small',
    align,
    split,
  } = props;

  const nodes = Array.isArray(children)
    ? React.Children.toArray(children)
    : [children];

  const distance =
    (typeof size === 'string' ? SIZE_MAP[size] || 0 : size) / (split ? 2 : 1);

  return (
    <div
      className={classnames(sc(), {
        [sc('horizontal')]: direction === 'horizontal',
        [sc('align-center')]: direction === 'horizontal' || align === 'center',
        [sc('align-start')]: align === 'start',
        [sc('align-end')]: align === 'end',
        [sc('align-baseline')]: align === 'baseline',
        [sc('vertical')]: direction === 'vertical',
      })}
    >
      {nodes.map((child, i) => {
        return (
          <React.Fragment key={`${sc('item')}-${i}`}>
            <div
              key={`${sc('item')}-${i}`}
              className={classnames(sc('item'))}
              style={
                i < nodes.length - 1 && distance
                  ? {
                      [direction === 'horizontal'
                        ? 'marginRight'
                        : 'marginBottom']: distance,
                    }
                  : undefined
              }
            >
              {child}
            </div>
            {split && i < nodes.length - 1 && (
              <span
                className={classnames(sc('item-split'))}
                style={
                  i < nodes.length - 1 && distance
                    ? {
                        [direction === 'horizontal'
                          ? 'marginRight'
                          : 'marginBottom']: distance,
                      }
                    : undefined
                }
              >
                {split}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Space;
