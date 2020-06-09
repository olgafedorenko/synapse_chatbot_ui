import React from 'react';
import ModalContainer from './ModalContainer';

const Modal = props => {
  return <ModalContainer {...props} />;
  // return props.isOpen ? <ModalContainer {...props} /> : null;
};

export default Modal;
