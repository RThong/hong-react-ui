import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';
import { ModalFuncProps, ModalProps } from './interface';

const open = (config: ModalFuncProps) => {
  const div = document.createElement('div');
  document.body.appendChild(div);

  const { content, onOk, afterClose, ...restConfig } = config;

  let localConfig: ModalProps = {
    ...restConfig,
    destroyOnClose: true,
    visible: false,
  };

  const render = (props: ModalProps) => {
    const { ...rest } = props;
    ReactDOM.render(<Modal {...rest}>{content ?? null}</Modal>, div);
  };

  const destroy = () => {
    ReactDOM.unmountComponentAtNode(div);
    if (div.parentNode) {
      div.parentNode.removeChild(div);
    }
  };

  const close = () => {
    localConfig = {
      ...localConfig,
      visible: false,
      afterClose: () => {
        afterClose?.();
        destroy();
      },
    };
    render(localConfig);
  };

  const localOnOk = () => {
    if (!onOk) {
      close();
      return;
    }

    let returnValueOfOnOk: any;

    if (onOk.length) {
      returnValueOfOnOk = onOk(close);
    } else {
      returnValueOfOnOk = onOk();
      if (!returnValueOfOnOk) {
        close();
        return;
      }
    }

    // 声明了close  &  没声明但是有返回值
    Promise.resolve()
      .then(() => {
        // 判断是否返回的是promise
        if (returnValueOfOnOk?.then) {
          return {
            type: 1,
            res: returnValueOfOnOk,
          };
        }
        return {
          type: 2,
          res: returnValueOfOnOk,
        };
      })
      .then((res) => {
        if (res.type === 1) {
          localConfig = {
            ...localConfig,
            visible: true,
            confirmLoading: true,
          };
          render(localConfig);

          return (res.res as PromiseLike<any>).then(() => {
            localConfig = {
              ...localConfig,
              confirmLoading: false,
              visible: false,
            };
            render(localConfig);
          });
        }

        if (!onOk.length) {
          close();
        }
      });
  };
  localConfig = {
    ...localConfig,
    visible: true,
    onCancel: close,
    onOk: localOnOk,
  };

  render(localConfig);
};

export default open;
