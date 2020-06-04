import React from 'react';
import styled from 'styled-components';

const ProgressBar = (props) => {
  const {
    progressIdx
  } = props;

  const ProgressStyle = styled.div`
  margin-top: 4px;
  font-family: Inter, sans-serif;
  font-size: 10px;
  line-height: 1;
  letter-spacing: 0.3px;
  color: #757575;
  @media only screen and (max-device-width: 420px) {
    font-size: 12px;
  }
`;

  return (
    <ProgressStyle>
      <b> {progressIdx} out of 3 </b> steps completed
    </ProgressStyle>
  );
};

export default ProgressBar;
