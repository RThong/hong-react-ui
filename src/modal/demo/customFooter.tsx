/**
 * title: 自定义页脚
 * desc: 不需要默认确定取消按钮时，你可以把 footer 设为 null。
 */
import React, { useState } from 'react';
import { Button, Modal } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

const Demo = () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={visible}
        onCancel={handleCancel}
        onOk={handleOk}
        footer={
          <div>
            <Button key="back" onClick={handleCancel}>
              Return
            </Button>
            ,
            <Button
              key="submit"
              type="primary"
              loading={loading}
              onClick={handleOk}
            >
              Submit
            </Button>
            <Button
              key="Search"
              type="primary"
              loading={loading}
              onClick={handleOk}
            >
              Search
            </Button>
          </div>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default Demo;
