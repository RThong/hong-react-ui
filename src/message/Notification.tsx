import React, {
  CSSProperties,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { createScopedClasses } from '@/utils';
import { LoadingOutlined } from '@ant-design/icons';
import './index.less';

const sc = createScopedClasses('message');

const Notice = () => {
  return (
    <div className={classnames(sc('notice'))}>
      <div className={classnames(sc('notice-content'))}>
        <div className={classnames(sc('custom-content'), sc('loading'))}>
          <LoadingOutlined />
          <span>Action in progress..</span>
        </div>
      </div>
    </div>
  );
};

const Notification = React.forwardRef((props, ref) => {
  const [noticeList, setNoticeList] = useState([]);

  const innerRef = useRef();

  useImperativeHandle(ref, () => ({
    add: () => setNoticeList((a) => [...a, 1]),
    instance: innerRef.current,
  }));

  return (
    <div ref={innerRef} className={classnames(sc())}>
      {noticeList.map((notice, index) => (
        <Notice key={index} />
      ))}
    </div>
  );
});

Notification.init = (callback) => {
  const div = document.createElement('div');
  document.body.appendChild(div);

  const ref = (notification) => {
    console.log('【aaa】', notification);

    callback({
      notice() {
        notification.add();
      },
      removeNotice() {
        notification.remove();
      },
      component: notification,
    });
  };

  ReactDOM.render(<Notification ref={ref} />, div);
};

export default Notification;
