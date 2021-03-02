/**
 * title: 文本域
 * desc: 用于多行输入。
 */
import React from 'react';
import { Input } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

const { TextArea } = Input;

const Demo = () => {
  return (
    <div>
      <TextArea rows="4" placeholder="文本域内容" />
    </div>
  );
};

export default Demo;
