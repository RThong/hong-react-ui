/**
 * title: 各种大小
 * desc: 小的用于文本加载，默认用于卡片容器级加载，大的用于页面级加载。
 */
import React from 'react';
import { Spin } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

const Demo = () => {
  return (
    <div>
      <Spin size="small" style={{ marginRight: 20 }} />
      <Spin style={{ marginRight: 20 }} />
      <Spin size="large" />
    </div>
  );
};

export default Demo;
