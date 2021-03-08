import React, {
  CSSProperties,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import ReactDOM from 'react-dom';
import QueueAnim from 'rc-queue-anim';
import classnames from 'classnames';
import { createScopedClasses } from '@/utils';
import { LoadingOutlined } from '@ant-design/icons';
import './index.less';
import {
  ArgsProps,
  CompoundedNotificationComponent,
  NoticeProps,
  NotificationProps,
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

const Notification = React.forwardRef<HTMLInputElement, any>((props, ref) => {
  const [noticeList, setNoticeList] = useState<ArgsProps[]>([]);

  const innerRef = useRef();

  const add = (addProps: ArgsProps) => {
    console.log('【add】', addProps);

    // const key = getUuid()

    setNoticeList((a) => [...a, addProps]);
  };

  const remove = (removeKey) => {
    console.log('【remove】', removeKey);

    setNoticeList((list) => list.filter((_) => _.key !== removeKey));
  };

  useImperativeHandle(ref, () => ({
    add,
    remove,
    instance: innerRef.current,
  }));

  return (
    <div ref={innerRef} className={classnames(sc())}>
      <QueueAnim type="top">
        {noticeList.map((notice) => (
          <Notice
            key={notice.key}
            noticeKey={notice.key}
            clearNotice={remove}
            {...notice}
          />
        ))}
      </QueueAnim>
    </div>
  );
}) as CompoundedNotificationComponent;

Notification.init = (callback) => {
  const div = document.createElement('div');
  document.body.appendChild(div);

  const ref = (notification) => {
    console.log('【aaa】', notification);

    callback({
      notice(noticeProps: ArgsProps) {
        notification.add(noticeProps);
      },
      removeNotice(key) {
        notification.remove(key);
      },
      component: notification,
    });
  };

  ReactDOM.render(<Notification ref={ref} />, div);
};

export default Notification;
