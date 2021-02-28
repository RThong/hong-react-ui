/**
 * title: 不可用状态
 * desc: 添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。
 */
import React from 'react';
import { Button } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

import './index.less';

const Demo = () => {
  return (
    <div className="wrap">
      <Button type="primary" disabled>
        Primary
      </Button>

      <Button disabled>Default</Button>

      <Button type="dashed" disabled>
        Dashed
      </Button>

      <Button type="text" disabled>
        Text
      </Button>

      <Button type="link" disabled>
        Link
      </Button>
    </div>
  );
};

export default Demo;
