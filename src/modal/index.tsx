import React from 'react';
import InternalModal from './Modal';
import open from './open';
import { ModalProps } from './interface';

interface CompoundedComponent extends React.FC<ModalProps> {
  open: typeof open;
}

const Modal = InternalModal as CompoundedComponent;

Modal.open = open;

export default Modal;
