import React from 'react';
import Button from '@/button';
import Transition from '@/transition';
import { CloseOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import { createScopedClasses } from '@/utils';

interface MaskProps {
  visible: boolean;
  afterClose: () => void;
}

const sc = createScopedClasses('modal');

const Mask: React.FC<MaskProps> = (props) => {
  const { visible, afterClose } = props;

  return (
    <Transition
      visible={visible}
      afterClose={afterClose}
      beforeEnter={{
        opacity: 0,
      }}
      afterEnter={{
        opacity: 1,
      }}
      afterLeave={{
        opacity: 0,
      }}
      afterClose={() => console.log('afterClose--')}
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
