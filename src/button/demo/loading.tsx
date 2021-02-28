/**
 * title: 加载中状态
 * desc: 添加 loading 属性即可让按钮处于加载状态。
 */
import React, { useState } from 'react';
import { Button } from 'hong-react-ui';

import 'hong-react-ui/dist/index.css';

const Demo = () => {
  const [loading, setLoading] = useState(false);

  const enterLoading = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div>
      <Button type="primary" loading={loading} onClick={enterLoading}>
        Loading
      </Button>
    </div>
  );
};

export default Demo;
