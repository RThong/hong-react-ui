/**
 * title: 基本用法
 * desc: 最简单的用法。
 */
import React, { useState } from 'react';
import { Tooltip, Button } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

const Demo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button onClick={() => setVisible((v) => !v)}>click</Button>
      <Tooltip
        //  visible={visible}
        defaultVisible={true}
        trigger="click"
      >
        <span>Tooltip will show on mouse enter.</span>
      </Tooltip>
    </div>
  );
};

export default Demo;
