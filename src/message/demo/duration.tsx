/**
 * title: 修改延时
 * desc: 自定义时长 10s，默认时长为 3s。
 */
import React from 'react';
import { Button, message } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

const Demo = () => {
  const success = () => {
    message.success({
      content:
        'This is a prompt message for success, and it will disappear in 10 seconds',
      duration: 10,
    });
  };

  return <Button onClick={success}>Customized display duration</Button>;
};

export default Demo;
