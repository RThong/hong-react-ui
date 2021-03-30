/**
 * title: 触发方式
 * desc: 支持 hover, click, focus 三种触发方式。
 */
import React from 'react';
import { Tooltip, Space, Button } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

const text = 'prompt text';

const Demo = () => {
  return (
    <Space>
      <Tooltip title={text}>
        <Button>Hover</Button>
      </Tooltip>
      <Tooltip title={text} trigger="click">
        <Button>Click</Button>
      </Tooltip>
      <Tooltip title={text} trigger="focus">
        <Button>Focus</Button>
      </Tooltip>
    </Space>
  );
};

export default Demo;
