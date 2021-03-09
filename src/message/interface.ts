import React from 'react';

export type NoticeType = 'info' | 'success' | 'error' | 'warning' | 'loading';

export interface MessageType extends PromiseLike<any> {
  promise: Promise<unknown>;
  (): void;
}

export type MessageInstance = {
  [key in NoticeType]: (config: ArgsProps) => MessageType;
};

export interface MessageApi extends MessageInstance {
  destroy: () => void;
}

export interface ArgsProps {
  content: React.ReactNode;
  duration?: number;
  // type: NoticeType;
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
  type: NoticeType;
  onClose: () => void;
}
