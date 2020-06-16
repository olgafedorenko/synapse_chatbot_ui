import React from 'react';
import styled from 'styled-components';

import ModalObj from '../utili/ModalCons';

import ThumbsDown from '../utili/ThumbsDown';
import ThumbsUp from '../utili/ThumbsUp';

const BottomTxt = styled.div`
cursor: pointer;
font-family: Nunito Sans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 20px;
color: #555555;
&:hover {
  text-decoration: underline;
};
&:active {
  text-decoration: underline;
  color: ${props => props.color};
};
`;

const RatingModal = ({ modalType, clientColor, closeModal }) => (
  <div className="rating-modal">
    <div className="top-txt">{ModalObj[modalType].header}</div>
    <div className="buttons-container">
      <ThumbsDown color={`#${clientColor}`} margin="0 32px 0 0" clickHandler={() => closeModal('reset')} />
      <ThumbsUp color={`#${clientColor}`} clickHandler={() => closeModal('reset')} />
    </div>
    <BottomTxt color={`#${clientColor}`} onClick={() => closeModal('reset')}>{ModalObj[modalType].content}</BottomTxt>
  </div>
);

export default RatingModal;
