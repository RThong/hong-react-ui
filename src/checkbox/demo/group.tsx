/**
 * title: Checkbox 组
 * desc: 方便的从数组生成 Checkbox 组。
 */
import React, { useRef, useState } from 'react';
import { Checkbox } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear', disabled: true },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];

const Demo = () => {
  const onChange = (checkedValues: string[]) => {
    console.log('checked = ', checkedValues);
  };

  return (
    <div>
      <Checkbox.Group
        options={plainOptions}
        defaultValue={['Apple']}
        onChange={onChange}
      />
      <br />
      <br />
      <Checkbox.Group
        options={options}
        defaultValue={['Pear']}
        onChange={onChange}
      />
      <br />
      <br />
      <Checkbox.Group
        options={optionsWithDisabled}
        disabled
        defaultValue={['Apple']}
        onChange={onChange}
      />
    </div>
  );
};

export default Demo;
