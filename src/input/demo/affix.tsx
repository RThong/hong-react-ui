/**
 * title: 前缀和后缀
 * desc: 在输入框上添加前缀或后缀图标。
 */
import React from 'react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Input } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

const Demo = () => {
  return (
    <div>
      <Input
        style={{ width: 300, marginRight: 20 }}
        prefix={<UserOutlined />}
        placeholder="username"
      />

      <Input
        style={{ width: 300, marginRight: 20 }}
        suffix={<LockOutlined />}
        placeholder="password"
      />

      <Input style={{ width: 300 }} prefix="￥" suffix="RMB" disabled />
    </div>
  );
};

export default Demo;
