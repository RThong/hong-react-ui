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
        enter={{ width: 200 }}
        leave={{ width: 20 }}
      >
        {({ className: motionClassName, style: motionStyle }, motionRef) => (
          <div
            className={motionClassName}
            style={{
              background: 'green',
              height: 30,
              width: 20,
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
