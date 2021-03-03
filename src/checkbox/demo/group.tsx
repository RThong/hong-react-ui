/**
 * title: Checkbox 组
 * desc: 方便的从数组生成 Checkbox 组。
 */
import React, { useRef, useState } from 'react';
import { Checkbox } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

const Demo = () => {
  const [value, setValue] = useState(['apple', 'peach']);

  return (
    <div>
      <Checkbox.Group
        options={['apple', 'peach']}
        // defaultValue={['apple']}
        value={value}
        onChange={(value) => {
          console.log('onchange', value);
          setValue(value);
        }}
      />
    </div>
  );
};

export default Demo;
