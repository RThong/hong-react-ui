/**
 * title: 自定义样式
 * desc: 使用 `style` 和 `className` 来定义样式。
 */
import React from 'react';
import { Button, message } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

const Demo = () => {
  const success = () => {
    message.success({
      content: 'This is a prompt message with custom className and style',
      className: 'custom-class',
      style: {
        marginTop: '20vh',
      },
    });
  };

  return <Button onClick={success}>Customized style</Button>;
};

export default Demo;
