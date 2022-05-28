/**
 * title: 不可用
 * desc: checkbox 不可用。
 */
import React from 'react';
import 'hong-react-ui/dist/index.css';
import { Checkbox } from '@/index';

const DisabledCheckbox = () => {
  return (
    <div>
      <Checkbox defaultChecked={false} disabled role="disabledFalse" />
      <br />
      <Checkbox defaultChecked disabled />
    </div>
  );
};

export default DisabledCheckbox;
