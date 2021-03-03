/**
 * title: 按钮尺寸
 * desc: 按钮有大、中、小三种尺寸。点击以查看对应尺寸的效果。
 */
import React, { useRef, useState } from 'react';
import { Checkbox } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

const Demo = () => {
  return (
    <div>
      <Checkbox
        onChange={(e) => {
          console.log(e.target.checked);
        }}
      >
        Checkbox
      </Checkbox>
    </div>
  );
};

export default Demo;
