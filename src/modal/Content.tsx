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
  onOk?: (e: React.MouseEvent<HTMLElement>) => void;
  onCancel?: (e: React.MouseEvent<HTMLElement>) => void;
  confirmLoading?: boolean;
  onBeforeEnter?: () => void;
  destroyOnClose?: boolean;
  footer?: React.ReactNode;
}

const Content: React.FC<ContentProps> = (props) => {
  const {
    visible,
    afterClose,
    title,
    children,
    width,
    onOk,
    onCancel,
    onBeforeEnter,
    confirmLoading,
    destroyOnClose,
    footer,
  } = props;

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
      onBeforeEnter={onBeforeEnter}
      removeOnLeave={destroyOnClose}
    >
      {({ style: motionStyle }, motionRef) => (
        <div
          className={classnames(sc())}
          style={{ ...contentStyle, ...motionStyle }}
          ref={motionRef}
        >
          <div className={classnames(sc('content'))}>
            <button
              onClick={onCancel}
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

            {footer !== null && (
              <div className={classnames(sc('footer'))}>
                {footer ? (
                  footer
                ) : (
                  <>
                    <Button onClick={onCancel}>取消</Button>
                    <Button
                      onClick={onOk}
                      type="primary"
                      loading={confirmLoading}
                    >
                      确定
                    </Button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </Transition>
  );
};

export default Content;
