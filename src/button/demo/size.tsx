/**
 * title: 按钮尺寸
 * desc: 按钮有大、中、小三种尺寸。点击以查看对应尺寸的效果。
 */
import React, { useState } from 'react';
import { Button } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

import './index.less';

enum Size {
  small = 'small',
  middle = 'middle',
  large = 'large',
}

const Demo = () => {
  const [size, setSize] = useState<Size>();

  return (
    <div className="wrap">
      <Button type="primary" onClick={() => setSize(Size.small)} size={size}>
        Small
      </Button>

      <Button type="primary" onClick={() => setSize(Size.middle)} size={size}>
        Default
      </Button>

      <Button type="primary" onClick={() => setSize(Size.large)} size={size}>
        Large
      </Button>
    </div>
  );
};

export default Demo;
