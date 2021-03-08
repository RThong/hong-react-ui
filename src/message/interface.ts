import React from 'react';

type NoticeType = 'info' | 'success' | 'error' | 'warning' | 'loading';
export interface ArgsProps {
  content: React.ReactNode;
  duration?: number;
  // type: NoticeType;
  // prefixCls?: string;
  // rootPrefixCls?: string;
  onClose?: () => void;
  // icon?: React.ReactNode;
  // key?: string | number;
  style?: React.CSSProperties;
  className?: string;
  // onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export interface NoticeProps extends ArgsProps {
  clearNotice: (key: React.Key) => void;
  noticeKey: React.Key;
}

export interface NotificationProps {
  aaa: string;
}

export interface CompoundedNotificationComponent
  extends React.ForwardRefExoticComponent<HTMLInputElement & any> {
  init: (fn: any) => void;
}

export interface NotificationInstance {
  notice: (noticeProps: ArgsProps) => void;
  removeNotice: (key: React.Key) => void;
  destroy: () => void;
  component: Notification;

  // useNotification: () => [NoticeFunc, React.ReactElement];
}
