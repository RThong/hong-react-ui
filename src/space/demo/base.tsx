/**
 * title: 基本用法
 * desc: 相邻组件水平间距。
 */
import React from 'react';
import { Space, Button, Checkbox, Radio } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

const Demo = () => {
  return (
    <Space>
      Space
      <Button type="primary">Button1</Button>
      <Checkbox>Checkbox</Checkbox>
      <Radio>Radio</Radio>
    </Space>
  );
};

export default Demo;
