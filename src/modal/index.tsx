import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import './index.less';
import { createScopedClasses } from '@/utils';
import ReactDOM from 'react-dom';
import { Button } from '..';
import { CloseOutlined } from '@ant-design/icons';
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
  console.log('【Modal】', props);

  const {
    // title,
    visible,
    onCancel,
    // onOk,
    keyboard = true,
    // children,
    afterClose,
    width = 520,
    ...rest
  } = props;

  const [animationVisible, setAnimationVisible] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  const closeModal = (e: React.SyntheticEvent<HTMLElement>) => {
    console.log('【closeModal】', e);
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
    visible && setAnimationVisible(true);
  }, [visible]);

  useEffect(() => {
    visible && wrapperRef.current?.focus();
  }, [visible]);

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
            closeModal={closeModal}
            {...rest}
          />
        </div>
      </div>
    );
  };

  return ReactDOM.createPortal(renderModal(), document.body);
};

export default Modal;
function dd(arg0: string, e: React.SyntheticEvent<HTMLElement, Event>) {
  throw new Error('Function not implemented.');
}
