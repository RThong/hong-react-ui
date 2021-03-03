/**
 * title: 不可用
 * desc: checkbox 不可用。
 */
import React from 'react';
import { Checkbox } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

const Demo = () => {
  return (
    <div>
      <Checkbox defaultChecked={false} disabled />
      <br />
      <Checkbox defaultChecked disabled />
    </div>
  );
};

export default Demo;
