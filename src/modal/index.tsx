import React from 'react';
import classnames from 'classnames';
import './index.less';
import { createScopedClasses } from '@/utils';
import ReactDOM from 'react-dom';
import { Button } from '..';
import { CloseOutlined } from '@ant-design/icons';

const sc = createScopedClasses('modal');

const ModalContent = () => {
  return (
    <div className={classnames(sc('root'))}>
      <div className={classnames(sc('mask'))} />

      <div className={classnames(sc('wrap'))}>
        <div className={classnames(sc())}>
          <div className={classnames(sc('content'))}>
            <button type="button" className={classnames(sc('close'))}>
              <span className={classnames(sc('close-x'))}>
                <CloseOutlined />
              </span>
            </button>

            <div className={classnames(sc('header'))}>header</div>

            <div className={classnames(sc('body'))}>body</div>

            <div className={classnames(sc('footer'))}>
              <Button>取消</Button>
              <Button type="primary">确定</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Modal = () => {
  console.log('modal');

  return ReactDOM.createPortal(<ModalContent />, document.body);
};

export default Modal;
