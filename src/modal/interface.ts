import React from 'react';

export interface ModalProps {
  /** 对话框是否可见 */
  visible: boolean;
  /** 确定按钮 loading */
  confirmLoading?: boolean;
  /** 标题 */
  title?: React.ReactNode | string;
  /** 是否显示右上角的关闭按钮 */
  closable?: boolean;
  /** 点击确定回调 */
  onOk?: (e: React.MouseEvent<HTMLElement>) => void;
  /** 点击模态框右上角叉、取消按钮、Props.maskClosable 值为 true 时的遮罩层或键盘按下 Esc 时的回调 */
  onCancel?: (e: React.SyntheticEvent<HTMLElement>) => void;
  afterClose?: () => void;
  /** 垂直居中 */
  centered?: boolean;
  /** 宽度 */
  width?: string | number;
  /** 底部内容 */
  footer?: React.ReactNode;
  /** 点击蒙层是否允许关闭 */
  maskClosable?: boolean;
  destroyOnClose?: boolean;
  style?: React.CSSProperties;
  wrapClassName?: string;
  className?: string;
  bodyStyle?: React.CSSProperties;
  maskStyle?: React.CSSProperties;
  mask?: boolean;
  keyboard?: boolean;
}

export interface ModalFuncProps
  extends Omit<ModalProps, 'confirmLoading' | 'visible' | 'onOk'> {
  content: React.ReactNode;
  onOk?: (...args: any[]) => any | PromiseLike<any>;
}
