/**
 * title: 其他提示类型
 * desc: 包括成功、失败、警告。
 */
import React from 'react';
import { Button, message } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

const Demo = () => {
  const success = () => {
    message.success({ content: 'This is a success message' });
  };

  const error = () => {
    message.error({ content: 'This is an error message' });
  };

  const warning = () => {
    message.warning({ content: 'This is a warning message' });
  };

  return (
    <div>
      <Button onClick={success} style={{ marginRight: 10 }}>
        Success
      </Button>
      <Button onClick={error} style={{ marginRight: 10 }}>
        Error
      </Button>
      <Button onClick={warning} style={{ marginRight: 10 }}>
        Warning
      </Button>
    </div>
  );
};

export default Demo;
