/**
 * title: 位置
 * desc: 位置有四个方向。
 */
import React from 'react';
import { Tooltip, Space, Button } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

const text = 'prompt text';

const Demo = () => {
  return (
    <Space>
      <Tooltip title={text} placement="left">
        <Button>Left</Button>
      </Tooltip>
      <Tooltip title={text} placement="top">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip title={text} placement="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip title={text} placement="right">
        <Button>Right</Button>
      </Tooltip>
    </Space>
  );
};

export default Demo;
