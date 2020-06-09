import React from 'react';
import ProgressBar from './ProgressBar';
import ProgressBarAnimated from './ProgressBar_animated';

import {
  Wrapper,
  HeaderWrapper,
  HeaderText,
  MinimizeSVG,
  ArrowExitIcon,
  HeaderMinimizeIconWrap,
  ArrowExitIconWrap,
  BetaLabel,
  HeaderCloseeIconWrap,
  HeaderContainer,
  HeaderStepText,
  CloseSVG
} from './header.styles';

const Header = (props) => {
  const {
    progressBar,
    progressIdx,
    triggerModal,
    isBusiness,
    clientColor,
    defaultPath,
    handleMinimize,
    headerText,
    headerSubText,
    router
  } = props;

  return (
    <Wrapper>
      {router
        ? (
          <ArrowExitIconWrap onClick={() => triggerModal('EDIT')} onKeyPress={() => triggerModal('EDIT')}>
            <ArrowExitIcon color={`#${clientColor}`} />
          </ArrowExitIconWrap>
        )
        : null
      }
      <HeaderWrapper defaultPath={defaultPath} style={isBusiness ? { paddingRight: '0px' } : null}>
        <HeaderContainer>
          <HeaderText>
            {headerText}
            <BetaLabel isBusiness={isBusiness}> {isBusiness ? 'Business' : 'Beta'} </BetaLabel>
          </HeaderText>
          {defaultPath === 'BANK_LOGINS' || defaultPath === 'ROUTER-BANK_LOGINS'  ? (
            progressBar !== 'visual'
              ? (
                <ProgressBar progressIdx={progressIdx} />)
              : <ProgressBarAnimated progressIdx={progressIdx} />
          ) : (
          <HeaderStepText>
            {headerSubText}
          </HeaderStepText>
          )
          }
        </HeaderContainer>
      </HeaderWrapper>
      <div>
        {router || defaultPath === 'SERVICING'
          ? (
            <HeaderMinimizeIconWrap onClick={() => handleMinimize('header')} onKeyPress={() => handleMinimize('header')}>
              <MinimizeSVG color={`#${clientColor}`} />
            </HeaderMinimizeIconWrap>
          )
          : (
            <HeaderCloseeIconWrap onClick={() => triggerModal('EDIT')} onKeyPress={() => triggerModal('EDIT')}>
              <CloseSVG />
            </HeaderCloseeIconWrap>
          )
        }


      </div>
    </Wrapper>
  );
};

export default Header;