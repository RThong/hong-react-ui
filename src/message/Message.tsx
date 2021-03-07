import React, { CSSProperties } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { createScopedClasses } from '@/utils';
import { LoadingOutlined } from '@ant-design/icons';
import Notification from './Notification';

import './index.less';

const sc = createScopedClasses('message');

let key = 1;
let Test = null;

const getKeyThenIncreaseKey = () => {
  return key++;
};

const info = (config: any) => {
  const target = key++;

  if (!Test) {
    Notification.init((instance) => {
      console.log('【init】', instance);

      Test = instance;
    });
  }

  Test.notice({
    key: target,
  });

  const result = () => {
    Test.removeNotice(target);
  };

  return result;
};

const message = {};

message.info = info;

export default message;
