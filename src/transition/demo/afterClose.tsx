/**
 * title: 离场动画结束回调
 * desc: 离场动画结束回调
 */
import React, { useState } from 'react';
import { Button, Transition, message } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

import './index.less';

const Demo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div style={{ display: 'flex' }}>
      <Button
        type="primary"
        onClick={() => setVisible((v) => !v)}
        style={{ marginRight: 20 }}
      >
        执行动画
      </Button>

      <Transition
        visible={visible}
        beforeEnter={{ transform: `translateX(20%)` }}
        afterEnter={{ transform: `translateX(300%)` }}
        beforeLeave={{ transform: `translateX(400%)` }}
        afterLeave={{ transform: `translateX(20%)` }}
        afterClose={() => {
          message.success({ content: '动画结束' });
        }}
        transitionActive={{
          transition: 'all 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0s',
        }}
      >
        {({ style: motionStyle }, motionRef) => (
          <div className="transition-box" style={motionStyle} ref={motionRef} />
        )}
      </Transition>
    </div>
  );
};

export default Demo;
