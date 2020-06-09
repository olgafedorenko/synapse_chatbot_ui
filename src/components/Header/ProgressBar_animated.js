import React from 'react';
import styled from 'styled-components';

const ProgressBarAnimated = (props) => {
  const {
    progressIdx
  } = props;

  const ProgressStyle = styled.div`
  background-color: #d8d8d8;
  border-radius: 2px;
  width: 64px;
  height: 8px;
  margin-right: 4px;
  margin-top: 10px;
  display: inline-block;
`;
  const percentage = progressIdx * 33;
  const ProgressBarStyle = styled.div`
  height: 8px;
  border-radius: 2px;
  border-bottom-right-radius: ${percentage === 99 ? '2px' : '0px'};
  border-top-right-radius: ${percentage === 99 ? '2px' : '0px'};
  width: ${percentage === 99 ? 100 : percentage}%;
  transition: 1.4s linear;
  transition-property: width;
  background-color: #626262;
`;

  const ProgressSpan = styled.span`
  font-family: Inter, sans-serif;
  font-size: 10px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.9;
  letter-spacing: normal;
  color: #8e8d92;
  @media only screen and (max-device-width: 420px) {
    font-size: 12px;
  }
`;

  return (
    <div>
      <ProgressStyle>
        <ProgressBarStyle />
      </ProgressStyle>
      <ProgressSpan>{progressIdx} / 3</ProgressSpan>
    </div>

  );
};

export default ProgressBarAnimated;
