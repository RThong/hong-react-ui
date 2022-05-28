/**
 * title: 受控的 Checkbox
 * desc: 联动 checkbox。
 */
import React, { useState } from 'react';
import 'hong-react-ui/dist/index.css';
import { Button, Checkbox } from '@/index';

const ControlledDemo = () => {
  const [checked, setChecked] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const onChange = (e: any) => {
    console.log('checked = ', e.target.checked);
    setChecked(e.target.checked);
  };

  const toggleChecked = () => {
    setChecked((c) => !c);
  };

  const toggleDisable = () => {
    setDisabled((d) => !d);
  };

  const label = `${checked ? 'Checked' : 'Unchecked'}-${
    disabled ? 'Disabled' : 'Enabled'
  }`;

  return (
    <>
      <p style={{ marginBottom: '20px' }}>
        <Checkbox
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          role="controlledCheckbox"
        >
          {label}
        </Checkbox>
      </p>
      <p>
        <Button
          type="primary"
          size="small"
          onClick={toggleChecked}
          role="checkButton"
        >
          {!checked ? 'Check' : 'Uncheck'}
        </Button>
        <Button
          style={{ margin: '0 10px' }}
          type="primary"
          size="small"
          onClick={toggleDisable}
          role="disabledButton"
        >
          {!disabled ? 'Disable' : 'Enable'}
        </Button>
      </p>
    </>
  );
};

export default ControlledDemo;
