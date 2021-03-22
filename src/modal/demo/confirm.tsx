/**
 * title: 组件式使用
 * desc: 使用组件声明一个对话框，通过控制 visible 属性来显示/隐藏。
 */
import React, { useState } from 'react';
import { Button, Modal } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

const { confirm } = Modal;

function showConfirm() {
  confirm({
    title: 'Title',
    content: 'Some descriptions',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
    visible: true,
  });
}

const Demo = () => {
  return (
    <div>
      <Button onClick={showConfirm}>Confirm</Button>
    </div>
  );
};

export default Demo;
