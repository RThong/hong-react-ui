/**
 * title: 单选组合
 * desc: 一组互斥的 Radio 配合使用。
 */
import React, { useState } from 'react';
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
            disabled: true,
          },
        ]}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Demo;
