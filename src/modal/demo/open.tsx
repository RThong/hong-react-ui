/**
 * title: 命令式使用
 * desc: 使用 `open()` 可以快捷地弹出对话框。onOk 返回 promise 可以延迟关闭。
 */
import React from 'react';
import { Button, Modal } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

const { open } = Modal;

const showModal = () => {
  open({
    title: 'Title',
    content: (
      <div>
        <div>Some contents...</div>
        <div>Some contents...</div>
        <div>Some contents...</div>
      </div>
    ),
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
};

const showPromiseModal = () => {
  open({
    title: 'Do you want to delete these items?',
    content:
      'When clicked the OK button, this dialog will be closed after 1 second',
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log('Oops errors!'));
    },
    onCancel() {},
  });
};

const Demo = () => {
  return (
    <div>
      <Button onClick={showModal} style={{ marginRight: 20 }}>
        Open
      </Button>

      <Button onClick={showPromiseModal}>With Promise</Button>
    </div>
  );
};

export default Demo;
