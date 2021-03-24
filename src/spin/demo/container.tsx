/**
 * title: 容器
 * desc: 放入一个容器中。
 */
import React from 'react';
import { Spin } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

const Demo = () => {
  return (
    <div
      style={{
        margin: '20px 0',
        marginBottom: '20px',
        padding: '30px 50px',
        textAlign: 'center',
        background: 'rgba(0, 0, 0, 0.05)',
        borderRadius: '4px',
      }}
    >
      <Spin />
    </div>
  );
};

export default Demo;
