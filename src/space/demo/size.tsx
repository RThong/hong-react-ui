/**
 * title: 间距大小
 * desc: |
 *  间距预设大、中、小三种大小。
 *  通过设置 `size` 为 `large` `middle` 分别把间距设为大、中间距。若不设置 `size`，则间距为小。
 */
import React, { useState } from 'react';
import { Space, Button, Radio } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

const Demo = () => {
  const [size, setSize] = useState('small');

  return (
    <>
      <Radio.Group
        value={size}
        onChange={(e) => setSize(e.target.value)}
        options={[
          {
            label: 'Small',
            value: 'small',
          },
          {
            label: 'Middle',
            value: 'middle',
          },
          {
            label: 'Large',
            value: 'large',
          },
        ]}
      />
      <br />
      <br />
      <Space size={size}>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="link">Link</Button>
      </Space>
    </>
  );
};

export default Demo;
