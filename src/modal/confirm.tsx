import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '.';
import { ModalFuncProps, ModalProps } from './interface';

const confirm = (config: ModalFuncProps) => {
  const div = document.createElement('div');
  document.body.appendChild(div);

  const { content, onOk } = config;

  let localConfig: ModalProps = { ...config, destroyOnClose: true };

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

          // return res;
          if (res && res?.then) {
            return {
              type: 1,
              res,
            };
          }
          return {
            type: 2,
            res: res,
          };
        })
        .then((res) => {
          if (res.type === 1) {
            // console.log('设置loading');
            localConfig = { ...localConfig, confirmLoading: true };
            render(localConfig);

            return res.res
              .then((aa) => {
                localConfig = {
                  ...localConfig,
                  confirmLoading: false,
                  visible: false,
                };
                render(localConfig);
              })
              .catch(() => {
                console.log('爆炸了');
              });
          }

          close();
        });
    }
  };

  render({ ...localConfig, visible: true, onCancel: close, onOk: localOnOk });
};

export default confirm;
