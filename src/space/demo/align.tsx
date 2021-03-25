/**
 * title: 对齐
 * desc: 设置对齐模式。
 */
import React from 'react';
import { Space, Button } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

import './index.less';

const Demo = () => {
  return (
    <div className="space-align-container">
      <div className="space-align-block">
        <Space align="center">
          center
          <Button type="primary">Primary</Button>
          <span className="mock-block">Block</span>
        </Space>
      </div>
      <div className="space-align-block">
        <Space align="start">
          start
          <Button type="primary">Primary</Button>
          <span className="mock-block">Block</span>
        </Space>
      </div>
      <div className="space-align-block">
        <Space align="end">
          end
          <Button type="primary">Primary</Button>
          <span className="mock-block">Block</span>
        </Space>
      </div>
      <div className="space-align-block">
        <Space align="baseline">
          baseline
          <Button type="primary">Primary</Button>
          <span className="mock-block">Block</span>
        </Space>
      </div>
    </div>
  );
};

export default Demo;
