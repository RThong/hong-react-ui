import React, { CSSProperties } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { createScopedClasses } from '@/utils';
import { LoadingOutlined } from '@ant-design/icons';
import Notification from './Notification';

import './index.less';

const sc = createScopedClasses('message');

let Test = null;

const info = (config: any) => {
  if (!Test) {
    Notification.init((instance) => {
      console.log('【init】', instance);

      Test = instance;
    });
  }

  Test.notice();
};

const message = {};

message.info = info;

export default message;
