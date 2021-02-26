/**
 * title: 按钮类型
 * desc: 按钮有五种类型：默认按钮、主按钮、虚线按钮、文本按钮和链接按钮。
 */
import React from 'react';
import { Button } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

import './index.less';

const Demo = () => {
  return (
    <div className="wrap">
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="text">Text</Button>
      <Button type="link">Link</Button>
    </div>
  );
};

export default Demo;
