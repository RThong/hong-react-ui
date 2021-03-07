/**
 * title: Message全局提示
 * desc: 全局展示操作反馈信息。
 */
import React from 'react';
import { Button, message } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

const info = () => {
  const aaa = message.info('This is a normal message');

  // const { close } = message.info('This is a normal message');
  setTimeout(() => {
    aaa();
  }, 2000);
};

const Demo = () => {
  return (
    <Button type="primary" onClick={info}>
      Display normal message
    </Button>
  );
};

export default Demo;
