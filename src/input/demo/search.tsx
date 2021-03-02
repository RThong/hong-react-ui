/**
 * title: 搜索框
 * desc: 带有搜索按钮的输入框。
 */
import React from 'react';
import { Input } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

const { Search } = Input;

const Demo = () => {
  return (
    <Search
      style={{ width: 300 }}
      placeholder="请输入搜索内容"
      onSearch={(value) => console.log('value', value)}
    />
  );
};

export default Demo;
