/**
 * title: 分隔符
 * desc: 相邻组件分隔符。
 */
import React from 'react';
import { Space, Button } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

const Demo = () => {
  return (
    <Space split={<span style={{ color: 'rgba(0,0,0,.06)' }}>|</span>}>
      <Button type="link">link</Button>
      <Button type="link">link</Button>
      <Button type="link">link</Button>
    </Space>
  );
};

export default Demo;
