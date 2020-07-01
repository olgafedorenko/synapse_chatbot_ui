import React from 'react';
import ModalContainer from './ModalContainer';

const Modal = props => {
  return props.isOpen ? <ModalContainer {...props} /> : null;
};

export default Modal;
