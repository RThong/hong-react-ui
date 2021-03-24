/**
 * title: 卡片加载中
 * desc: 可以直接把内容内嵌到 `Spin` 中，将现有容器变为加载状态。
 */
import React, { useState } from 'react';
import { Spin, Button } from 'hong-react-ui';
import 'hong-react-ui/dist/index.css';

const Demo = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Spin spinning={loading}>
        <div style={{ height: 80, background: '#e6f7ff', padding: 20 }}>
          这里是内容
        </div>
      </Spin>
      <div style={{ marginTop: 16 }}>
        <Button type="primary" onClick={() => setLoading((v) => !v)}>
          {loading ? '结束 loading' : '开始 loading'}
        </Button>
      </div>
    </div>
  );
};

export default Demo;
