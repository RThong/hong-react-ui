/**
 * title: 前置 / 后置标签
 * desc: 用于配置一些固定组合。
 */
import React from 'react';
import { Input } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

import { SettingOutlined } from '@ant-design/icons';

const Demo = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Input
        addonBefore="Http://"
        addonAfter=".com"
        placeholder="placeholder"
      />

      <Input addonAfter={<SettingOutlined />} placeholder="placeholder" />

      <Input
        addonBefore={<div>这是一段前置标签dom</div>}
        placeholder="placeholder"
      />
    </div>
  );
};

export default Demo;
