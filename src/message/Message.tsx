import React, { CSSProperties } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { createScopedClasses } from '@/utils';
import { LoadingOutlined } from '@ant-design/icons';
import './index.less';

const sc = createScopedClasses('message');

const Dialog = () => {
  const renderDialog = () => {
    return (
      <div className={classnames(sc())}>
        <div className={classnames(sc('notice'))}>
          <div className={classnames(sc('notice-content'))}>
            <div className={classnames(sc('custom-content'), sc('loading'))}>
              <LoadingOutlined />
              <span>Action in progress..</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return ReactDOM.createPortal(renderDialog(), document.body);
};

const info = (config: any) => {
  const div = document.createElement('div');
  div.classList.add('test');
  document.body.appendChild(div);
  const { content, onCancel, onOk, ...restProps } = config;

  const close = () => {
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };

  // onCancel onOk外部会添加visible来控制显示隐藏  所以可以直接调用close  和visible一样都是关闭modal
  ReactDOM.render(
    <Dialog
    // {...restProps}
    // onCancel={e => {
    // 	close()
    // 	onCancel && onCancel(e)
    // }}
    // onOk={e => {
    // 	close()
    // 	onOk && onOk(e)
    // }}
    >
      {/* {content} */}
    </Dialog>,
    div,
  );

  // Dialog();

  return {
    close,
  };
};

const message = {};

message.info = info;

export default message;
