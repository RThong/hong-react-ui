/**
 * title: 基本
 * desc: 最简单的用法。
 */
import React, { useRef, useState } from 'react';
import { Radio } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

const Demo = () => {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <div>
      <Radio.Group
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
          },
        ]}
        onChange={onChange}
        // value={value}
        defaultValue={1}
      >
        {/* <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio> */}
      </Radio.Group>
    </div>
  );
};

export default Demo;
