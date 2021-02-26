/**
 * title: 图标按钮
 * desc: 按钮有五种类型：默认按钮、主按钮、虚线按钮、文本按钮和链接按钮。
 */
import React from 'react';
import { Button } from 'hong-react-ui';
import { HomeOutlined } from '@ant-design/icons';
import 'hong-react-ui/dist/index.css';

const Demo = () => {
  return (
    <div>
      <Button>
        <HomeOutlined />
        Default
      </Button>
    </div>
  );
};

export default Demo;
