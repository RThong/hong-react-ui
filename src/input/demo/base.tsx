/**
 * title: 基本使用
 * desc: 基本使用
 */
import React from 'react';
import { Input } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

const Demo = () => {
  return (
    <Input
      style={{ width: 300 }}
      placeholder="Basic usage"
      onChange={(e) => {
        console.log(e.target.value);
      }}
    />
  );
};

export default Demo;
