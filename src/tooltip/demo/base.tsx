/**
 * title: 基本用法
 * desc: 最简单的用法。
 */
import React from 'react';
import { Tooltip, Checkbox, Input, Radio, Space, Spin } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

const Demo = () => {
  return (
    <Tooltip title="prompt text">
      {/* <span>Tooltip will show on mouse enter.</span> */}
      {/* <Radio.Group
        options={[
          {
            label: 'A',
            value: 1,
          },
          {
            label: 'B',
            value: 2,
          },
          {
            label: 'C',
            value: 3,
          },
          {
            label: 'D',
            value: 4,
            disabled: true,
          },
        ]}
        value={1}
      /> */}
      <Radio />
    </Tooltip>
  );
};

export default Demo;
