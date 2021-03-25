/**
 * title: 垂直间距
 * desc: 相邻组件垂直间距。。
 */
import React from 'react';
import { Space } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

const Demo = () => {
  return (
    <Space direction="vertical">
      <div
        style={{
          width: '300px',
          border: '1px solid #f0f0f0',
          padding: '20px 24px',
        }}
      >
        <p>Card content</p>
        <p>Card content</p>
      </div>
      <div
        style={{
          width: '300px',
          border: '1px solid #f0f0f0',
          padding: '20px 24px',
        }}
      >
        <p>Card content</p>
        <p>Card content</p>
      </div>
    </Space>
  );
};

export default Demo;
