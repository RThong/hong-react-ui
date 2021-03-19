import React from 'react';
import Transition from '@/transition';
import classnames from 'classnames';
import { createScopedClasses } from '@/utils';

interface MaskProps {
  visible: boolean;
}

const sc = createScopedClasses('modal');

const Mask: React.FC<MaskProps> = (props) => {
  const { visible } = props;

  return (
    <Transition
      visible={visible}
      beforeEnter={{
        opacity: 0,
      }}
      afterEnter={{
        opacity: 1,
      }}
      afterLeave={{
        opacity: 0,
      }}
    >
      {({ style: motionStyle }, motionRef) => (
        <div
          className={classnames(sc('mask'))}
          style={motionStyle}
          ref={motionRef}
        />
      )}
    </Transition>
  );
};

export default Mask;
