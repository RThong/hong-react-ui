import React, { CSSProperties } from 'react';
import classnames from 'classnames';
import { createScopedClasses } from '@/utils';

interface TransitionProps {
  aaa?: string;
}

const sc = createScopedClasses('transition');

const Transition: React.FC<TransitionProps> = (props) => {
  const { children } = props;

  return <div className={classnames(sc())}>{children}</div>;
};

export default Transition;
