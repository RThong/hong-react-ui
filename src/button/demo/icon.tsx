/**
 * title: 图标按钮
 * desc: 设置内嵌 Icon 图标和位置。
 */
import React from 'react';
import { Button } from 'hong-react-ui';
import { HomeOutlined } from '@ant-design/icons';
import 'hong-react-ui/dist/index.css';

const Demo = () => {
  return (
    <div>
      <Button>
        <span className="icon-demo">
          <HomeOutlined />
          <span>Default</span>
        </span>
      </Button>
    </div>
  );
};

export default Demo;
