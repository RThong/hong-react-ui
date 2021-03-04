/**
 * title: 基本
 * desc: 最简单的用法。
 */
import React, { useRef, useState } from 'react';
import { Radio } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

const Demo = () => {
  const [checked, setChecked] = useState(false);
  const ref = useRef();
  return (
    <div>
      <Radio
        ref={ref}
        defaultChecked={false}
        // checked={checked}
        autoFocus
        onChange={(e) => console.log('onChange', e.target.checked)}
      >
        Radio
      </Radio>
      <button onClick={() => ref.current.focus()}>click</button>
    </div>
  );
};

export default Demo;
