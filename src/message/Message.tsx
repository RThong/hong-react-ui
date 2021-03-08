import React, { CSSProperties } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { createScopedClasses } from '@/utils';
import { LoadingOutlined } from '@ant-design/icons';
import Notification from './Notification';

import './index.less';
import { ArgsProps, NotificationInstance } from './interface';

const sc = createScopedClasses('message');

let key = 1;
let messageInstance: NotificationInstance | null = null;

const getKeyThenIncreaseKey = () => {
  return key++;
};

const info = (config: ArgsProps) => {
  const target = key++;

  const closePromise = new Promise((resolve) => {
    const callback = () => {
      if (typeof args.onClose === 'function') {
        args.onClose();
      }
      return resolve(true);
    };

    if (!messageInstance) {
      Notification.init((instance) => {
        console.log('【init】', instance);

        messageInstance = instance;
      });
    }

    messageInstance.notice({
      ...config,
      key: target,
      onClose: () => resolve(true),
    });
  });

  const result = () => {
    messageInstance.removeNotice(target);
  };

  result.then = (filled, rejected) => closePromise.then(filled, rejected);

  return result;
};

const message = {};

message.info = info;

export default message;
