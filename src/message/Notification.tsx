import React, { useImperativeHandle, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import QueueAnim from 'rc-queue-anim';
import classnames from 'classnames';
import { createScopedClasses } from '@/utils';
import { LoadingOutlined } from '@ant-design/icons';
import './index.less';
import {
  CompoundedNotificationComponent,
  NoticeItem,
  NotificationInstance,
  NotificationRef,
} from './interface';
import Notice from './Notice';

let seed = 0;

const now = Date.now();

const getUuid = () => {
  const id = seed;
  seed += 1;
  return `hong_Notification_${now}_${id}`;
};

const sc = createScopedClasses('message');

const Notification = React.forwardRef<NotificationRef, any>((props, ref) => {
  const [noticeList, setNoticeList] = useState<NoticeItem[]>([]);

  const innerRef = useRef<HTMLDivElement>(null);

  const add = (addProps: NoticeItem) => {
    console.log('【add】', addProps);

    setNoticeList((a) => [...a, addProps]);
  };

  const remove = (removeKey: React.Key) => {
    console.log('【remove】', removeKey);

    setNoticeList((list) => list.filter((_) => _.key !== removeKey));
  };

  useImperativeHandle(ref, () => ({
    add,
    remove,
    instance: innerRef.current as HTMLDivElement,
  }));

  return (
    <div ref={innerRef} className={classnames(sc())}>
      <QueueAnim type="top">
        {noticeList.map(({ key, ...restNoticeProps }) => (
          <Notice
            key={key}
            noticeKey={key}
            clearNotice={remove}
            {...restNoticeProps}
          />
        ))}
      </QueueAnim>
    </div>
  );
}) as CompoundedNotificationComponent;

Notification.init = (callback: (instance: NotificationInstance) => void) => {
  const div = document.createElement('div');
  document.body.appendChild(div);

  const ref = (notification: NotificationRef) => {
    console.log('【aaa】', notification);

    callback({
      notice(noticeProps: NoticeItem) {
        notification.add(noticeProps);
      },
      removeNotice(key) {
        notification.remove(key);
      },
      component: notification,

      destroy() {
        ReactDOM.unmountComponentAtNode(div);
        if (div.parentNode) {
          div.parentNode.removeChild(div);
        }
      },
    });
  };

  ReactDOM.render(<Notification ref={ref} />, div);
};

export default Notification;
