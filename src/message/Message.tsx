import React, { CSSProperties } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { createScopedClasses } from '@/utils';
import { LoadingOutlined } from '@ant-design/icons';
import Notification from './Notification';

import './index.less';
import {
  ArgsProps,
  MessageApi,
  MessageType,
  NotificationInstance,
  ThenableArgument,
} from './interface';

const sc = createScopedClasses('message');

let key = 1;
let messageInstance: NotificationInstance | null = null;

const getKeyThenIncreaseKey = () => {
  return key++;
};

const info: (config: ArgsProps) => MessageType = (config) => {
  const target = key++;

  const closePromise = new Promise<any>((resolve) => {
    // const callback = () => {
    //   if (typeof args.onClose === 'function') {
    //     args.onClose();
    //   }
    //   return resolve(true);
    // };

    if (!messageInstance) {
      Notification.init((instance: NotificationInstance) => {
        console.log('【init】', instance);

        messageInstance = instance;
      });
    }

    messageInstance?.notice?.({
      ...config,
      key: target,
      onClose: () => resolve(true),
    });
  });

  const result = () => {
    messageInstance?.removeNotice?.(target);
  };
  result.then = (filled: any, rejected: any) =>
    closePromise.then(filled, rejected);

  result.promise = closePromise;

  return result;
};

const message: MessageApi = {
  info,
};

export default message;
