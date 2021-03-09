import React, { useEffect, useRef } from 'react';
import { createScopedClasses } from '@/utils';
import { NoticeProps } from './interface';
import classnames from 'classnames';
import {
  CheckCircleFilled,
  CloseCircleFilled,
  InfoCircleFilled,
  LoadingOutlined,
} from '@ant-design/icons';

const sc = createScopedClasses('message');

const TYPE_ICON_MAP = {
  info: <InfoCircleFilled />,
  success: <CheckCircleFilled />,
  error: <CloseCircleFilled />,
  warning: <InfoCircleFilled />,
  loading: <LoadingOutlined />,
};

const Notice: React.FC<NoticeProps> = (props) => {
  const {
    content,
    duration = 3,
    noticeKey,
    clearNotice,
    type,
    className,
    ...rest
  } = props;

  const timerDuration = duration * 1000;

  const onClose = useRef(props.onClose);

  useEffect(() => {
    if (timerDuration === 0) {
      return;
    }
    const timer = setTimeout(() => {
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
        <div className={classnames(sc('custom-content'), sc(type))}>
          {TYPE_ICON_MAP[type]}
          <span>{content}</span>
        </div>
      </div>
    </div>
  );
};

export default Notice;
