/**
 * title: 基本使用
 * desc: 基本使用
 */
import React, { useRef } from 'react';
import { Input } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

const Demo = () => {
  const ref = useRef();
  return (
    <div>
      <Input
        ref={ref}
        style={{ width: 300 }}
        placeholder="Basic usage"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <button onClick={() => ref.current?.focus()}>click</button>
    </div>
  );
};

export default Demo;
