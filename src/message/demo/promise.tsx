/**
 * title: Promise 接口
 * desc: 可以通过 then 接口在关闭后运行 callback 。以上用例将在每个 message 将要结束时通过 then 显示新的 message 。
 */
import React from 'react';
import { Button, message } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

const Demo = () => {
  const success = () => {
    message
      .loading({ content: 'Action in progress..', duration: 2.5 })
      .then(() =>
        message.success({ content: 'Loading finished', duration: 2.5 }),
      )
      .then(() =>
        message.info({
          content: 'Loading finished is finished',
          duration: 2.5,
        }),
      );
  };

  return <Button onClick={success}>Display sequential messages</Button>;
};

export default Demo;
