import React, {
  CSSProperties,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { createScopedClasses } from '@/utils';
import { NoticeProps } from './interface';
import classnames from 'classnames';
import { LoadingOutlined } from '@ant-design/icons';

const sc = createScopedClasses('message');

const Notice: React.FC<NoticeProps> = (props) => {
  console.log('【Notice】', props);
  const {
    content,
    duration = 3,
    noticeKey,
    clearNotice,
    className,
    ...rest
  } = props;

  const timerDuration = duration * 1000;

  const onClose = useRef(props.onClose);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('timer');

      clearNotice(noticeKey);
    }, timerDuration);

    return () => {
      clearTimeout(timer);
    };
  }, [timerDuration, noticeKey, clearNotice]);

  useEffect(() => {
    return () => {
      onClose.current?.();
    };
  }, []);

  return (
    <div className={classnames(sc('notice'), className)} {...rest}>
      <div className={classnames(sc('notice-content'))}>
        <div className={classnames(sc('custom-content'), sc('loading'))}>
          <LoadingOutlined />
          <span>{content}</span>
        </div>
      </div>
    </div>
  );
};

export default Notice;
