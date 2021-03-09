/**
 * title: 加载中
 * desc: 进行全局 loading，异步自行移除。
 */
import React from 'react';
import { Button, message } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

const Demo = () => {
  const success = () => {
    const hide = message.loading({
      content: 'Action in progress..',
      duration: 0,
    });
    // Dismiss manually and asynchronously
    setTimeout(hide, 2500);
  };

  return <Button onClick={success}>Display a loading indicator</Button>;
};

export default Demo;
