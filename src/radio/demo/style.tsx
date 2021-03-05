/**
 * title: 按钮样式
 * desc: 按钮样式的单选组合。
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
        defaultValue="a"
        options={options1}
        onChange={onChange}
        optionType="button"
      />
      <br />
      <br />
      <Radio.Group
        defaultValue="a"
        options={options2}
        onChange={onChange}
        optionType="button"
      />
      <br />
      <br />
      <Radio.Group
        defaultValue="a"
        disabled
        options={options1}
        onChange={onChange}
        optionType="button"
      />
    </div>
  );
};

export default Demo;
