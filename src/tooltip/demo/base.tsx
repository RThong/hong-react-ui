/**
 * title: 基本用法
 * desc: 最简单的用法。
 */
import React from 'react';
import { Tooltip } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

const Demo = () => {
  return (
    <Tooltip>
      <span>Tooltip will show on mouse enter.</span>
    </Tooltip>
  );
};

export default Demo;
