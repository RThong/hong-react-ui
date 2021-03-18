import { createScopedClasses } from '@/utils';
import { CloseOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import React from 'react';
import { Button, Transition } from '..';

const sc = createScopedClasses('modal');

interface ContentProps {
  width: string | number;
  visible: boolean;
  afterClose: () => void;
  title: React.ReactNode;
  closeModal: (e: React.SyntheticEvent<HTMLElement>) => void;
}

const Content: React.FC<ContentProps> = (props) => {
  const { visible, afterClose, title, children, closeModal, width } = props;

  const contentStyle = {
    width,
  };

  return (
    <Transition
      visible={visible}
      afterClose={afterClose}
      beforeEnter={{
        opacity: 0,
        transform: 'scale(0, 0)',
      }}
      afterEnter={{
        opacity: 1,
        transform: 'scale(1, 1)',
      }}
      afterLeave={{
        opacity: 0,
        transform: 'scale(0, 0)',
      }}
      transitionActive={{
        transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s',
      }}
    >
      {({ style: motionStyle }, motionRef) => (
        <div
          className={classnames(sc())}
          style={{ ...contentStyle, ...motionStyle }}
          ref={motionRef}
        >
          <div className={classnames(sc('content'))}>
            <button
              onClick={closeModal}
              type="button"
              className={classnames(sc('close'))}
            >
              <span className={classnames(sc('close-x'))}>
                <CloseOutlined />
              </span>
            </button>

            <div className={classnames(sc('header'))}>
              <div className={classnames(sc('title'))}>{title}</div>
            </div>

            <div className={classnames(sc('body'))}>{children}</div>

            <div className={classnames(sc('footer'))}>
              <Button onClick={closeModal}>取消</Button>
              <Button onClick={closeModal} type="primary">
                确定
              </Button>
            </div>
          </div>
        </div>
      )}
    </Transition>
  );
};

export default Content;
