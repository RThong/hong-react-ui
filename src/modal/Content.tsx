import { createScopedClasses } from '@/utils';
import { CloseOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import React from 'react';
import { Button, Transition } from '..';

const sc = createScopedClasses('modal');

const Content = (props: { visible: boolean }) => {
  const { visible } = props;

  return (
    <Transition visible={visible} enter={{}}>
      {({ className: motionClassName, style: motionStyle }, motionRef) => (
        <div className={classnames(sc())} style={contentStyle}>
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
