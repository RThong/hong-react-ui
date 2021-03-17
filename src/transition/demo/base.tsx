/**
 * title: 基本用法
 * desc: 最基本的用法。
 */
import React, { useState } from 'react';
import { Button, Transition } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

const Demo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button onClick={() => setVisible((v) => !v)}>click</Button>
      <Transition
        visible={visible}
        // beforeEnter={{
        //   transform: `translateX(20%)`,
        // }}
        afterEnter={{ transform: `translateX(100%)` }}
        beforeLeave={{ transform: `translateX(150%)` }}
        // afterLeave={{ transform: `translateX(20%)` }}
        // afterClose={() => console.log('afterClose')}
        transitionActive={{
          transition: 'all .5s linear',
        }}
      >
        {({ className: motionClassName, style: motionStyle }, motionRef) => (
          <div
            className={motionClassName}
            style={{
              background: 'green',
              height: 30,
              width: 100,
              ...motionStyle,
            }}
            ref={motionRef}
          />
        )}
      </Transition>
    </div>
  );
};

export default Demo;
