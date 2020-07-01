import React from 'react';
import styled, { keyframes } from 'styled-components';
import * as SvgIcons from '../SvgIcons';

const LoadingBubble = (props) => {
  const {
    clientColor,
    withTail,
    bubbleColor,
    bubbleBorder
  } = props;

  const LoadContainer = styled.div`
  height: 28px;
  width: 44px;
  background-color: ${bubbleColor}; // should be cool/warm tone, use props
  border-radius: 10px;
  float: left;
  margin:  4px 5px 4px 36px; 
  display: inline-block;
  max-width: 78%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

  const LoadWithTail = styled.div`
  height: 28px;
  width: 44px;
  background-color: ${bubbleColor}; // should be cool/warm tone, use props
  border-radius: 10px 10px 10px 0;
  float: left;
  margin:  4px 5px 4px 36px; 
  display: inline-block;
  max-width: 78%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${bubbleColor === '#fff' ? 'solid 1px #D9D9D9' : null};
`;

  const wave = keyframes`
    0%, 50%, 100%  {
      transform: initial;
    }

    25% {
      transform: scale(0);
    }
    `;

  const Dot = styled.span`
    height: 6px;
    background-color: black;
    display: inline-block;
    width: 6px;
    border-radius: 50%;
    margin-right: 5px;
    background-color: ${`#${clientColor}`};
    animation: ${wave} 1s linear infinite;
    &:nth-child(2) {
      animation-delay: -0.7s;
    }
    &:nth-child(3) {
      margin-right: 0;
      animation-delay: -0.5s;
    }
`;

  const TailDiv = styled.div`
    margin-left: 30px;
    position: absolute;
    bottom: 0px;
`;


  return (
    <div>
      {withTail
        ? (
          <TailDiv>
            <SvgIcons.tail color={bubbleColor} border={bubbleBorder ? '#D6D6D6' : bubbleColor} />
          </TailDiv>
        )
        : null}
      {withTail
        ? (
          <LoadWithTail>
            <Dot id="dot1" />
            <Dot id="dot2" />
            <Dot id="dot3" />
          </LoadWithTail>
        )
        : (
          <LoadContainer id="wave">
            <Dot id="dot1" />
            <Dot id="dot2" />
            <Dot id="dot3" />
          </LoadContainer>
        )
      }

    </div>
  );
};

export default LoadingBubble;
