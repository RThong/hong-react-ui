/**
 * title: 基本使用
 * desc: 基本使用
 */
import React from 'react';
import { Input } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

const Demo = () => {
  return (
    <div>
      <Input
        style={{ width: 300 }}
        placeholder="Basic usage"
        onChange={(e) => {
          console.log('onChange', e.target.value);
        }}
      />
    </div>
  );
};

export default Demo;
