/**
 * title: 基本
 * desc: 最简单的用法。
 */
import React, { useEffect, useRef } from 'react';
import { Radio } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

const Demo = () => {
  const ref = useRef(null);

  useEffect(() => {
    console.log('【demo】', ref.current);
    ref.current?.focus();
  }, []);

  return (
    <div>
      <Radio ref={ref} value={true}>
        Radio
      </Radio>
    </div>
  );
};

export default Demo;
