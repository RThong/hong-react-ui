/**
 * title: Checkbox 组
 * desc: 方便的从数组生成 Checkbox 组。
 */
import React, { useRef, useState } from 'react';
import 'hong-react-ui/dist/index.css';
import { Checkbox } from '@/index';

const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];

const GroupDemo = () => {
  const onChange = (checkedValues: string[]) => {
    console.log('checked = ', checkedValues);
  };

  return (
    <div>
      <Checkbox.Group
        options={plainOptions}
        defaultValue={['Apple']}
        onChange={onChange}
        role="plainGroup"
      />
      <br />
      <br />
      <Checkbox.Group
        options={options}
        defaultValue={['Pear']}
        onChange={onChange}
        role="Group"
      />
      <br />
      <br />
      <Checkbox.Group
        options={optionsWithDisabled}
        disabled
        defaultValue={['Apple']}
        onChange={onChange}
        role="disabledGroup"
      />
    </div>
  );
};

export default GroupDemo;
