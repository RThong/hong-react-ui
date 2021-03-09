/**
 * title: 普通提示
 * desc: 信息提醒反馈。
 */
import React from 'react';
import { Button, message } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

const info = () => {
  message.info({ content: 'This is a normal message' });
};

const Demo = () => {
  return (
    <Button type="primary" onClick={info}>
      Display normal message
    </Button>
  );
};

export default Demo;
