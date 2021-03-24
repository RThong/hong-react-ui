import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import './index.less';
import { createScopedClasses } from '@/utils';
import ReactDOM from 'react-dom';
import Content from './Content';
import Mask from './Mask';
import { ModalProps } from './interface';

const sc = createScopedClasses('modal');

const Modal: React.FC<ModalProps> = (props) => {
  const {
    title,
    visible,
    onCancel,
    onOk,
    keyboard = true,
    children,
    afterClose,
    width = 520,
    confirmLoading,
    destroyOnClose = false,
    footer,
    closable = true,
    centered = false,
    maskClosable = true,
    wrapClassName,
    mask = true,
    className,
    style,
  } = props;

  const [animationVisible, setAnimationVisible] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleOk = (e: React.MouseEvent<HTMLElement>) => {
    onOk?.(e);
  };

  const handleCancel = (e: React.SyntheticEvent<HTMLElement>) => {
    onCancel?.(e);
  };

  const handleWrapperClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!maskClosable) {
      return;
    }
    if (e.target === wrapperRef.current) {
      handleCancel(e);
    }
  };

  const onWrapperKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (keyboard && e.key === 'Escape') {
      e.stopPropagation();
      handleCancel(e);
    }
  };

  useEffect(() => {
    visible && setAnimationVisible((v) => (!v ? true : false));
  }, [visible]);

  const handleFocus = () => {
    wrapperRef.current?.focus();
  };

  const handleAfterClose = () => {
    setAnimationVisible(false);
    afterClose?.();
  };

  const renderModal = () => {
    return (
      <div className={classnames(sc('root'))}>
        {mask && <Mask visible={visible} />}

        <div
          tabIndex={-1}
          ref={wrapperRef}
          onKeyDown={onWrapperKeyDown}
          onClick={handleWrapperClick}
          className={classnames(
            sc('wrap'),
            { [sc('centered')]: centered },
            wrapClassName,
          )}
          style={
            animationVisible
              ? undefined
              : {
                  display: 'none',
                }
          }
        >
          <Content
            width={width}
            visible={visible}
            afterClose={handleAfterClose}
            onOk={handleOk}
            onCancel={handleCancel}
            onBeforeEnter={handleFocus}
            title={title}
            confirmLoading={confirmLoading}
            destroyOnClose={destroyOnClose}
            footer={footer}
            closable={closable}
            maskClosable={maskClosable}
            className={className}
            style={style}
          >
            {children}
          </Content>
        </div>
      </div>
    );
  };

  return ReactDOM.createPortal(renderModal(), document.body);
};

export default Modal;
