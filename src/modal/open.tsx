import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '.';
import { ModalFuncProps, ModalProps } from './interface';

const open = (config: ModalFuncProps) => {
  const div = document.createElement('div');
  document.body.appendChild(div);

  const { content, onOk, ...restConfig } = config;

  let localConfig: ModalProps = {
    ...restConfig,
    destroyOnClose: true,
    visible: false,
  };

  const render = (props: ModalProps) => {
    const { ...rest } = props;
    ReactDOM.render(<Modal {...rest}>{content}</Modal>, div);
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
        destroy();
      },
    };
    render(localConfig);
  };

  const localOnOk = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const fn = onOk;

    if (fn) {
      Promise.resolve()
        .then(() => {
          const res = fn(e);

          // 判断是否返回的是promise
          if (res?.then) {
            return {
              type: 1,
              res: res,
            };
          }
          return {
            type: 2,
            res: res,
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
              console.log('!!!!!!');
              localConfig = {
                ...localConfig,
                confirmLoading: false,
                visible: false,
              };
              render(localConfig);
            });
          }
          close();
        });
    }
  };

  render({ ...localConfig, visible: true, onCancel: close, onOk: localOnOk });
};

export default open;
