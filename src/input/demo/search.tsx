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
    <div>
      <div style={{ marginBottom: 10 }}>
        <Search
          style={{ width: 300 }}
          placeholder="请输入搜索内容"
          onSearch={(value) => console.log(value)}
        />
      </div>
      <div style={{ marginBottom: 10 }}>
        <Search
          style={{ width: 300 }}
          placeholder="请输入搜索内容"
          onSearch={(value) => console.log(value)}
          enterButton
        />
      </div>
      <div>
        <Search
          style={{ width: 300 }}
          placeholder="请输入搜索内容"
          onSearch={(value) => console.log(value)}
          enterButton="Search"
        />
      </div>
    </div>
  );
};

export default Demo;
