import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '.';
import { ModalFuncProps, ModalProps } from './interface';

const confirm = (config: ModalFuncProps) => {
  const div = document.createElement('div');
  document.body.appendChild(div);

  let localConfig: ModalFuncProps = { ...config, destroyOnClose: true };

  const render = (props: ModalFuncProps) => {
    const { content, ...rest } = props;
    ReactDOM.render(<Modal {...rest}>{content}</Modal>, div);
  };

  const destroy = () => {
    console.log('【destroy】');

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

  render({ ...localConfig, visible: true, onCancel: close });
};

export default confirm;
