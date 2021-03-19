import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import './index.less';
import { createScopedClasses } from '@/utils';
import ReactDOM from 'react-dom';
import Content from './Content';
import Mask from './Mask';

const sc = createScopedClasses('modal');

interface ModalProps {
  visible: boolean;
  onCancel?: (e: React.SyntheticEvent<HTMLElement>) => void;
  onOk?: (e: React.SyntheticEvent<HTMLElement>) => void;
  afterClose?: () => void;
  keyboard?: boolean;
  width?: string | number;
  title?: React.ReactNode;
}

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
    ...rest
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
    if (e.target === wrapperRef.current) {
      handleCancel(e);
    }
  };

  const onWrapperKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (keyboard && e.key === 'Escape') {
      console.log('【onWrapperKeyDown】');

      e.stopPropagation();
      handleCancel(e);
    }
  };

  useEffect(() => {
    visible && setAnimationVisible(true);
  }, [visible]);

  const handleFocus = () => {
    wrapperRef.current?.focus();
  };

  const handleAfterClose = () => {
    console.log('【handleAfterClose】');
    setAnimationVisible(false);
    afterClose?.();
  };

  const renderModal = () => {
    return (
      <div className={classnames(sc('root'))}>
        <Mask visible={visible} />

        <div
          tabIndex={-1}
          ref={wrapperRef}
          onKeyDown={onWrapperKeyDown}
          onClick={handleWrapperClick}
          className={classnames(sc('wrap'))}
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
