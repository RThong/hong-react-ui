/**
 * title: 填底的按钮样式
 * desc: 实色填底的单选按钮样式。
 */
import React from 'react';
import { Radio } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

const options1 = [
  { label: 'Hangzhou', value: 'a' },
  { label: 'Shanghai', value: 'b' },
  { label: 'Beijing', value: 'c' },
  { label: 'Chengdu', value: 'd' },
];
const options2 = [
  { label: 'Hangzhou', value: 'a' },
  { label: 'Shanghai', value: 'b', disabled: true },
  { label: 'Beijing', value: 'c' },
  { label: 'Chengdu', value: 'd' },
];

const Demo = () => {
  const onChange = (e) => {
    console.log(`radio checked:${e.target.value}`);
  };

  return (
    <div>
      <Radio.Group
        defaultValue="b"
        options={options1}
        onChange={onChange}
        optionType="button"
        buttonStyle="solid"
      />
      <br />
      <br />
      <Radio.Group
        defaultValue="c"
        options={options2}
        onChange={onChange}
        optionType="button"
        buttonStyle="solid"
      />
    </div>
  );
};

export default Demo;
