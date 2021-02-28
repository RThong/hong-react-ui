/**
 * title: 幽灵按钮
 * desc: 幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。
 */
import React from 'react';
import { Button } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

import './index.less';

const Demo = () => {
  return (
    <div className="ghost-demo wrap">
      <Button type="primary" ghost>
        Primary
      </Button>

      <Button ghost>Default</Button>

      <Button type="dashed" ghost>
        Dashed
      </Button>
    </div>
  );
};

export default Demo;
