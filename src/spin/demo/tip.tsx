/**
 * title: 自定义描述文案
 * desc: 自定义描述文案。
 */
import React from 'react';
import { Spin } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

const Demo = () => {
  return (
    <div>
      <Spin tip="Loading...">
        <div style={{ height: 80, background: '#e6f7ff', padding: 20 }}>
          这里是内容
        </div>
      </Spin>
    </div>
  );
};

export default Demo;
