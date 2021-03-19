import React from 'react';
import ReactDOM from 'react-dom';
import Modal, { ModalProps } from '.';

const confirm = (config: ModalProps) => {
  const div = document.createElement('div');
  document.body.appendChild(div);

  ReactDOM.render(<Modal {...config} />, div);
};

export default confirm;
