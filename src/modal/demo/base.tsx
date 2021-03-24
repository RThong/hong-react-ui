/**
 * title: 组件式使用
 * desc: 使用组件声明一个对话框，通过控制 visible 属性来显示/隐藏。
 */
import React, { useState } from 'react';
import { Button, Modal, Input } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

const Demo = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={() => {
          console.log('onOk');
        }}
        onCancel={() => {
          console.log('onCancel');
          setVisible(false);
        }}
        destroyOnClose
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <Input />
      </Modal>
    </div>
  );
};

export default Demo;
