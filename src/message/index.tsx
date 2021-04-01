import Notification from './Notification';

import './index.less';
import {
  ArgsProps,
  MessageApi,
  MessageType,
  NoticeType,
  NotificationInstance,
} from './interface';

let key = 1;
let messageInstance: NotificationInstance | null = null;

const notice: (config: ArgsProps & { type: NoticeType }) => MessageType = (
  config,
) => {
  const target = key++;

  const closePromise = new Promise<any>((resolve) => {
    if (!messageInstance) {
      // 初始化时通过传入回调去拿到操作Notification的api对象
      Notification.init((instance: NotificationInstance) => {
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

const message: any = {
  // open: notice,
  destroy: () => {
    messageInstance?.destroy();
  },
};

['success', 'info', 'warning', 'error', 'loading'].forEach((key) => {
  message[key] = (config: ArgsProps) =>
    notice({
      ...config,
      type: key as NoticeType,
    });
});

export default message as MessageApi;
