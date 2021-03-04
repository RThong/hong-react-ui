/**
 * title: 不可用
 * desc: Radio 不可用。
 */
import React, { useState } from 'react';
import { Radio, Button } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

const Demo = () => {
  const [disabled, setDisabled] = useState(false);

  const toggleDisabled = () => {
    setDisabled((d) => !d);
  };

  return (
    <div>
      <Radio defaultChecked={false} disabled={disabled}>
        Disabled
      </Radio>
      <Radio defaultChecked disabled={disabled}>
        Disabled
      </Radio>
      <br />
      <Button type="primary" onClick={toggleDisabled} style={{ marginTop: 16 }}>
        Toggle disabled
      </Button>
    </div>
  );
};

export default Demo;
