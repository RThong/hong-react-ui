/**
 * title: 自定义尺寸
 * desc: 自定义间距大小。
 */
import React, { useState } from 'react';
import { Space, Button } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

const Demo = () => {
  const [size, setSize] = useState(8);

  return (
    <>
      <Space>
        <Button
          size="small"
          type="primary"
          onClick={() => setSize((v) => v + 1)}
        >
          +
        </Button>
        <span>{size}</span>
        <Button
          size="small"
          type="primary"
          onClick={() => setSize((v) => v - 1)}
        >
          -
        </Button>
      </Space>
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
