import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import './index.less';
import { createScopedClasses } from '@/utils';
import ReactDOM from 'react-dom';
import { Button } from '..';
import { CloseOutlined } from '@ant-design/icons';
import Content from './Content';

const sc = createScopedClasses('modal');

interface ModalProps {
  visible?: boolean;
  onCancel?: (e: React.SyntheticEvent<HTMLElement>) => void;
  onOk?: (e: React.SyntheticEvent<HTMLElement>) => void;
  keyboard?: boolean;
  width?: string | number;
  title?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = (props) => {
  console.log('【Modal】', props);

  const {
    title,
    visible,
    onCancel,
    onOk,
    keyboard = true,
    children,
    width = 520,
  } = props;

  const contentStyle = {
    width,
  };

  const wrapperRef = useRef<HTMLDivElement>(null);

  const closeModal = (e: React.SyntheticEvent<HTMLElement>) => {
    onCancel?.(e);
  };

  // const handleOk = (e: React.MouseEvent<HTMLElement>) => {
  //   onOk?.(e);
  // };

  const handleWrapperClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === wrapperRef.current) {
      closeModal(e);
    }
  };

  const onWrapperKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (keyboard && e.key === 'Escape') {
      e.stopPropagation();
      closeModal(e);
    }
  };

  useEffect(() => {
    visible && wrapperRef.current?.focus();
  }, [visible]);

  const renderModal = () => {
    return (
      <div className={classnames(sc('root'))}>
        {visible && <div className={classnames(sc('mask'))} />}

        <div
          tabIndex={-1}
          ref={wrapperRef}
          onKeyDown={onWrapperKeyDown}
          onClick={handleWrapperClick}
          className={classnames(sc('wrap'))}
          style={
            visible
              ? undefined
              : {
                  display: 'none',
                }
          }
        >
          <Content />
        </div>
      </div>
    );
  };

  return ReactDOM.createPortal(renderModal(), document.body);
};

export default Modal;
