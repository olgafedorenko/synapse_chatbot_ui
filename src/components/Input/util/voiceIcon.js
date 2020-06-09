import React from 'react';
import styled from 'styled-components';
import * as SvgIcons from '../../SvgIcons';
import utils from '../util/util';

export const voiceMemoCloseIcon = () => {
  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 15px;
    border-radius: 17px;
    background: white;
    :hover {
      cursor: pointer;
      background: white;
    };
  `;

  return (
    <Wrapper>
      <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="1.84853" y1="1" x2="20.799" y2="19.9505" stroke="#757575" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="0.6" y1="-0.6" x2="27.4" y2="-0.6" transform="matrix(-0.707107 0.707107 0.707107 0.707107 21.5996 1)" stroke="#757575" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    </Wrapper>
  );
};


// export const voiceMemoPlayButton = (clientColor) => {
//   const Wrapper = styled.div`
//     height: 28px;
//     width: 28px;
//     border-radius: 14px;
//     background: gray;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     :hover {
//       background: ${utils.hoverColor(`#${clientColor}`)};
//     };
//   `;

//   return (
//     <Wrapper>
//       <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M12.5 7.13397C13.1667 7.51888 13.1667 8.48112 12.5 8.86602L2 14.9282C1.33333 15.3131 0.499999 14.832 0.499999 14.0622L0.5 1.93782C0.5 1.16802 1.33333 0.686896 2 1.0718L12.5 7.13397Z" fill="white" />
//       </svg>
//     </Wrapper>
//   );
// };

export const voiceMemoPlayButton = (
  color,
  noHoverColor = false,
  noBg = false, clientColor
) => {
  const Wrapper = styled.div`
    height: 28px;
    width: 28px;
    border-radius: 14px;
    background: ${props => (props.noBg ? 'transparent' : '#D9D9D9')};
    
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
      background: ${props => (props.noHoverColor ? 'transparent' : utils.hoverColor(`#${clientColor}`))};
      cursor: pointer;
    };
  `;

  return (
    <Wrapper noBg={noBg} noHoverColor={noHoverColor}>
      <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5 7.13397C13.1667 7.51888 13.1667 8.48112 12.5 8.86602L2 14.9282C1.33333 15.3131 0.499999 14.832 0.499999 14.0622L0.5 1.93782C0.5 1.16802 1.33333 0.686896 2 1.0718L12.5 7.13397Z" fill={`${color}`} />
      </svg>
    </Wrapper>
  );
};

export const voiceMemoStopButton = (clientColor) => {
  const Wrapper = styled.div`
    height: 28px;
    width: 28px;
    border-radius: 14px;
    background: gray;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
      background: ${utils.hoverColor(`#${clientColor}`)};
    };
  `;

  return (
    <Wrapper>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="14" fill="#D9D9D9" />
        <rect x="10" y="7" width="2" height="14" rx="1" fill="white" />
        <rect x="16" y="7" width="2" height="14" rx="1" fill="white" />
      </svg>

    </Wrapper>
  );
};

export const voiceMemoPauseButton = (
  color,
  noHoverColor = false,
  noBg = false,
  clientColor
) => {
  const Wrapper = styled.div`
    height: 28px;
    width: 28px;
    border-radius: 14px;
    background: ${props => (props.noBg ? 'transparent' : '#D9D9D9')};

    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
      background: ${props => (props.noHoverColor ? 'transparent' : utils.hoverColor(`#${clientColor}`))};
      cursor: pointer;
    };
  `;

  return (
    <Wrapper noBg={noBg} noHoverColor={noHoverColor}>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="7" width="2" height="14" rx="1" fill={`${color}`} />
        <rect x="16" y="7" width="2" height="14" rx="1" fill={`${color}`} />
      </svg>
    </Wrapper>
  );
};


export const voiceMemoRecordIcon = (clientColor) => {
  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28px;
    width: 28px;
    border-radius: 14px;
    background: #D9D9D9;
    :hover {
      background: ${utils.hoverColor(`#${clientColor}`)}
    };
  `;

  const InnerCircle = styled.div`
    height: 14px;
    width: 14px;
    border-radius: 7px;
    background: white;
  `;
  return <Wrapper><InnerCircle /></Wrapper>;
};

export const voiceMemoStopRecordIcon = (clientColor) => {
  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28px;
    width: 28px;
    border-radius: 14px;
    background: #D9D9D9;
    :hover {
      background: ${utils.hoverColor(`#${clientColor}`)}
    };
  `;

  const InnerCircle = styled.div`
    height: 14px;
    width: 14px;
    border-radius: 1px;
    background: white;
  `;
  return <Wrapper><InnerCircle /></Wrapper>;
};

export const voiceMemoIcon = (clientColor) => {
  const Wrapper = styled.div`
    :hover {
      svg > circle {
        fill: ${utils.hoverColor(`#${clientColor}`)}
      };
      cursor: pointer;
    };
  `;

  return (
    <Wrapper>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="14" fill="#D9D9D9" />
        <rect x="8" y="9" width="2" height="10" rx="1" fill="white" />
        <rect x="13" y="6" width="2" height="16" rx="1" fill="white" />
        <rect x="18" y="9" width="2" height="10" rx="1" fill="white" />
      </svg>
    </Wrapper>
  );
};

export const sendButton = (clientColor) => {
  const SendIcon = styled.div`
  cursor: pointer;
  // padding: 2px;
  &:hover {
    svg {
      path {
        &:first-child {
          fill: ${props => utils.hoverColor(`#${props.clientColor}`)}
        }
      }
    }
  };
`;

  return (
    <SendIcon clientColor={clientColor} id="closeIcon">
        <SvgIcons.send clientColor={clientColor} id="sendBtn" />
    </SendIcon>
    // <Wrapper>
    //   <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    //     <path d="M2.47362 14.9921C1.95051 14.6911 1.28237 14.8712 0.9813 15.3943C0.68023 15.9174 0.860247 16.5855 1.38336 16.8866L2.47362 14.9921ZM9.27492 1.10655L9.93124 0.232701C9.47977 -0.106388 8.84421 -0.0456983 8.46511 0.37272L9.27492 1.10655ZM3.79011 5.53201C3.38478 5.97923 3.41878 6.67041 3.86613 7.07561C4.31335 7.48094 5.00452 7.44694 5.40973 6.9996L3.79011 5.53201ZM14.6293 6.4947C15.112 6.85716 15.797 6.75978 16.1594 6.27722C16.5219 5.79454 16.4245 5.10956 15.942 4.7471L14.6293 6.4947ZM1.38336 16.8866C2.38052 17.4604 3.62424 17.9358 4.91466 17.9815C6.24054 18.0285 7.61232 17.6161 8.71489 16.4324C9.78638 15.2821 10.5024 13.5117 10.8052 11.036C11.1089 8.55158 11.009 5.25831 10.3555 0.942913L8.19433 1.27019C8.8311 5.4747 8.90663 8.55376 8.6356 10.7707C8.36348 12.9964 7.75463 14.2565 7.11555 14.9426C6.50756 15.5953 5.78312 15.8251 4.99201 15.7972C4.1652 15.768 3.27088 15.451 2.47362 14.9921L1.38336 16.8866ZM8.46511 0.37272L3.79011 5.53201L5.40973 6.9996L10.0847 1.84038L8.46511 0.37272ZM8.6186 1.9804L14.6293 6.4947L15.942 4.7471L9.93124 0.232701L8.6186 1.9804Z" fill="white" />
    //   </svg>
    // </Wrapper>
  );
};

export const voiceMessageIcon = () => {
  const Wrapper = styled.div`
    height: 24px;
    width: 24px;
    display: flex;
    align-items: center;
  `;

  return (
    <Wrapper>
      <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="4.5" width="3" height="15" rx="1.5" fill="#333333" />
        <rect x="7.5" width="3" height="24" rx="1.5" fill="#333333" />
        <rect x="15" y="4.5" width="3" height="15" rx="1.5" fill="#333333" />
      </svg>
    </Wrapper>
  );
};


export const voiceMessageResetIcon = (clientColor) => {
  const Wrapper = styled.div`
    height: 100%;
    width: 18px;
    display: flex;
    align-items: center;
    :hover {
      cursor: pointer;
    };
  `;

  return (
    <Wrapper>

      <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.8444 8.80051C18.8495 10.954 18.0646 13.0346 16.6384 14.6482C15.2122 16.2617 13.2437 17.2962 11.1059 17.5556C8.96805 17.815 6.80932 17.2813 5.03861 16.0557C3.26789 14.8301 2.00817 12.9976 1.49807 10.9053C1.46265 10.734 1.49497 10.5556 1.58823 10.4076C1.6815 10.2596 1.82846 10.1534 1.9983 10.1114C2.16814 10.0694 2.34765 10.0947 2.49918 10.1822C2.65071 10.2697 2.76249 10.4124 2.81105 10.5805C3.23132 12.2902 4.2439 13.7956 5.66899 14.8294C7.09409 15.8633 8.83945 16.3586 10.5952 16.2275C12.3509 16.0963 14.0033 15.3472 15.259 14.1131C16.5147 12.879 17.2924 11.2399 17.454 9.48673C17.6156 7.73356 17.1506 5.97986 16.1417 4.53704C15.1327 3.09421 13.6451 2.05564 11.943 1.60576C10.2408 1.15588 8.43432 1.32379 6.84425 2.07969C5.25418 2.83559 3.98346 4.13055 3.25774 5.73462L5.42349 4.96983C5.50789 4.93998 5.59738 4.92716 5.68677 4.93213C5.77616 4.9371 5.86368 4.95975 5.94425 4.99878C6.02482 5.0378 6.09685 5.09243 6.15617 5.15949C6.21548 5.22655 6.2609 5.30471 6.28979 5.38945C6.348 5.55908 6.33651 5.74488 6.25783 5.90604C6.17915 6.0672 6.03973 6.19054 5.87018 6.24898L2.41851 7.46722C2.34649 7.49093 2.27099 7.50237 2.19517 7.50106C2.07089 7.50132 1.94894 7.46735 1.84269 7.40288C1.73644 7.33841 1.64999 7.24594 1.59282 7.13559L0.0835608 4.17121C0.0399692 4.09183 0.0127527 4.00451 0.00352358 3.91442C-0.00570557 3.82432 0.00324037 3.7333 0.0298314 3.64672C0.0564225 3.56015 0.100118 3.4798 0.158329 3.41042C0.21654 3.34104 0.288083 3.28406 0.36872 3.24283C0.449356 3.20161 0.537447 3.17699 0.627772 3.17043C0.718098 3.16387 0.808821 3.1755 0.894568 3.20464C0.980315 3.23378 1.05934 3.27983 1.12697 3.34007C1.19459 3.40031 1.24944 3.47351 1.28826 3.55533L2.03951 5.09166C2.88374 3.27428 4.32306 1.79954 6.11938 0.911386C7.9157 0.0232308 9.96138 -0.225122 11.918 0.20741C13.8747 0.639942 15.6251 1.72744 16.8797 3.29002C18.1342 4.85259 18.8178 6.79662 18.8173 8.80051H18.8444Z" fill={`#${clientColor}`} />
      </svg>
    </Wrapper>
  );
};
