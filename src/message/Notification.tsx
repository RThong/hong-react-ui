import React, {
  CSSProperties,
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

let seed = 0;

const now = Date.now();

const getUuid = () => {
  const id = seed;
  seed += 1;
  return `hong_Notification_${now}_${id}`;
};

const sc = createScopedClasses('message');

const Notice = (props) => {
  console.log('【Notice】', props);

  return (
    <div className={classnames(sc('notice'))}>
      <div className={classnames(sc('notice-content'))}>
        <div className={classnames(sc('custom-content'), sc('loading'))}>
          <LoadingOutlined />
          <span>Action in progress.. {props.aaa}</span>
        </div>
      </div>
    </div>
  );
};

const Notification = React.forwardRef((props, ref) => {
  const [noticeList, setNoticeList] = useState([]);

  const innerRef = useRef();

  const add = (addProps) => {
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
        {noticeList.map((notice, key) => (
          <Notice key={notice.key} aaa={notice.key} />
        ))}
      </QueueAnim>
    </div>
  );
});

Notification.init = (callback) => {
  const div = document.createElement('div');
  document.body.appendChild(div);

  const ref = (notification) => {
    console.log('【aaa】', notification);

    callback({
      notice(noticeProps) {
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
