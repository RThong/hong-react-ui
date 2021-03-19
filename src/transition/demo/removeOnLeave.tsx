/**
 * title: 退场动画后去除元素
 * desc: 退场动画后默认删除元素， `removeOnLeave` 为 `false` 退场动画后只隐藏元素不删除。
 */
import React, { useState } from 'react';
import { Button, Transition } from 'hong-react-ui';
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
        afterEnter={{ transform: `translateX(300%)` }}
        removeOnLeave={false}
      >
        {({ style: motionStyle }, motionRef) => (
          <div className="transition-box" style={motionStyle} ref={motionRef} />
        )}
      </Transition>
    </div>
  );
};

export default Demo;
