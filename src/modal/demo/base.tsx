/**
 * title: 组件式使用
 * desc: 使用组件声明一个对话框，通过控制 visible 属性来显示/隐藏。
 */
import React, { useState, useEffect } from 'react';
import { Modal } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

const Demo = () => {
  const [a, setA] = useState({});
  useEffect(() => {
    setTimeout(() => {
      setA({});
    }, 2000);
  }, []);
  return (
    <div>
      <Modal>ad</Modal>
    </div>
  );
};

export default Demo;
