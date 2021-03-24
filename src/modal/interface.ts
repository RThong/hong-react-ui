import React from 'react';

export interface ModalProps {
  visible: boolean;
  confirmLoading?: boolean;
  title?: React.ReactNode | string;
  closable?: boolean;
  onOk?: (e: React.MouseEvent<HTMLElement>) => void;
  onCancel?: (e: React.SyntheticEvent<HTMLElement>) => void;
  afterClose?: () => void;
  centered?: boolean;
  width?: string | number;
  footer?: React.ReactNode;
  maskClosable?: boolean;
  destroyOnClose?: boolean;
  style?: React.CSSProperties;
  wrapClassName?: string;
  className?: string;
  mask?: boolean;
  keyboard?: boolean;
}

export interface ModalFuncProps {
  content?: React.ReactNode;
  title?: React.ReactNode | string;
  closable?: boolean;
  onOk?: (...args: any[]) => any | PromiseLike<any>;
  onCancel?: (e: React.SyntheticEvent<HTMLElement>) => void;
  afterClose?: () => void;
  centered?: boolean;
  width?: string | number;
  maskClosable?: boolean;
  style?: React.CSSProperties;
  className?: string;
  mask?: boolean;
  keyboard?: boolean;
}
