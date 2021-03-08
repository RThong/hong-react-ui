import React from 'react';

export type NoticeType = 'info';

export interface MessageType extends PromiseLike<any> {
  promise: Promise<unknown>;
  (): void;
}

export type MessageApi = {
  [key in NoticeType]: (config: ArgsProps) => MessageType;
};

export interface ArgsProps {
  content: React.ReactNode;
  duration?: number;
  // type: NoticeType;
  // prefixCls?: string;
  // rootPrefixCls?: string;
  // onClose?: () => void;
  // icon?: React.ReactNode;
  key?: string | number;
  style?: React.CSSProperties;
  className?: string;
  // onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export interface NoticeProps extends NoticeItem {
  clearNotice: (key: React.Key) => void;
  noticeKey: React.Key;
}

export interface NotificationProps {
  aaa: string;
}

export interface NotificationRef {
  add: (props: NoticeItem) => void;
  remove: (key: React.Key) => void;
  instance: HTMLDivElement;
}

export interface CompoundedNotificationComponent
  extends React.ForwardRefExoticComponent<NotificationRef & any> {
  init: (fn: any) => void;
}

export interface NotificationInstance {
  notice: (noticeProps: NoticeItem) => void;
  removeNotice: (key: React.Key) => void;
  destroy: () => void;
  component: NotificationRef;

  // useNotification: () => [NoticeFunc, React.ReactElement];
}

export type ThenableArgument = (val: any) => void;

export interface NoticeItem extends Omit<ArgsProps, 'key'> {
  key: number;
  onClose: () => void;
}
