import { createScopedClasses } from '@/utils';
import classnames from 'classnames';
import React, { useEffect, useRef } from 'react';

import './index.less';

export interface TooltipProps {
  title?: string;
}

const sc = createScopedClasses('tooltip');

const Tooltip: React.FC<TooltipProps> = (props) => {
  const { children } = props;

  const ref = useRef(null);

  useEffect(() => {
    // setTimeout(() => {
    console.log('【ref】', ref.current.getBoundingClientRect());
    // }, 1000);
  }, []);

  return (
    <div>
      {React.cloneElement(children, {
        ref,
      })}
    </div>
  );
};

export default Tooltip;
