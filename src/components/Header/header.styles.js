// -----------------------------------------------------------------------------------------
// ------------------------------------ Library Imports ------------------------------------
// -----------------------------------------------------------------------------------------

import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------


export const Wrapper = styled.div`
  display: flex;
`;

export const HeaderWrapper = styled.div`
  height: 67px;
  padding: ${(props) => {
    if (props.defaultPath) return '12px 0px 12px 0px';
    return '12px 13px 12px 24px';
  }};
  // padding: 12px 13px 12px 24px;
  flex-grow: 1;
  @media only screen and (max-devide-width: 420px) {
  padding: 14px 16px 6px 24px;
  }
  @media only screen and (max-devide-width: 359px) {
  padding: 14px 13px 6px 24px;
  }
`;

export const HeaderContainer = styled.div`
  background: white;
  border-radius: 5px 5px 0 0;
  color: #fff;
  display: flex;
  flex-direction: column;
`;

export const HeaderText = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  height: 26px;
  // margin-left: 35px;
  font-family: Nunito Sans;
  font-size: 20px;
  font-weight: bold;
  line-height: 1;
  letter-spacing: normal;
  color: #333333;
  @media only screen and (max-devide-width: 420px) {
    font-size: 24px;
  }
  @media only screen and (max-devide-width: 359px) { 
    font-size: 20px;
  }
`;

export const HeaderStepText = styled.div`
  font-family: Inter, sans-serif;
  font-size: 10px;
  font-weight: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: 0.3px;
  color: #757575;
  margin-top: 4px;
`;

export const HeaderMinimizeIconWrap = styled.div`
  cursor: pointer;
  pointer-events: visible;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 42px;
  height: 48px;
`;

export const ArrowExitIconWrap = styled.div`
  cursor: pointer;
  pointer-events: visible;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 42px;
  height: 52px;
`;


export const BetaLabel = styled.span`
  width: ${(props) => {
    if (props.isBusiness) return 'auto';
    return 'auto';
  }};
  height: ${(props) => {
    if (props.isBusiness) return 'auto';
    return 'auto';
  }};
  border-radius: 10px;
  background-color: #e2fafd;
  font-family: Nunito Sans;
  font-size: 11px;
  color: #109fb1;
  font-weight: bold;
  margin-left: ${(props) => {
    if (props.isBusiness) return '7px';
    return '10px';
  }};
  padding: 5px 8.5px 4px;
  text-transform: ${(props) => {
    if (props.isBusiness) return 'capitalize';
    return 'uppercase';
  }};
`;


export const HeaderCloseeIconWrap = styled.div`
  cursor: pointer;
  pointer-events: visible;
  transition: transform .3s;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 48px;
  height: 48px;
  &:hover {
    transform: rotate(90deg);
  }
`;

const ArrowIcon = styled.svg`
  fill: #757575;
  &:hover {
    path {
      fill: ${props => props.color};
    }
  };
  &:active {
    path {
      fill: ${props => props.color};
    }
  }
`;

export const ArrowExitIcon = ({ color }) => (
  <ArrowIcon color={color} width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.73649 2.05755C7.0277 1.76298 7.02497 1.28812 6.7304 0.99691C6.43584 0.705702 5.96097 0.708426 5.66976 1.00299L6.73649 2.05755ZM5.72896 11.7403C6.02353 12.0315 6.49839 12.0288 6.7896 11.7342C7.08081 11.4396 7.07809 10.9648 6.78352 10.6736L5.72896 11.7403ZM5.66976 1.00299L1.56105 5.15912L2.62777 6.21368L6.73649 2.05755L5.66976 1.00299ZM1.57524 7.63395L5.72896 11.7403L6.78352 10.6736L2.6298 6.56722L1.57524 7.63395ZM1.56105 5.15912C0.881559 5.84645 0.887916 6.95447 1.57524 7.63395L2.6298 6.56722C2.53161 6.47016 2.5307 6.31187 2.62777 6.21368L1.56105 5.15912Z" fill="#757575" />
    <path d="M2.27325 5.64355C1.85903 5.64371 1.52333 5.97963 1.52344 6.39384C1.52354 6.80806 1.85941 7.14372 2.27363 7.14356L2.27325 5.64355ZM13.7729 7.13912C14.1871 7.13896 14.5228 6.80304 14.5227 6.38883C14.5226 5.97461 14.1867 5.63895 13.7725 5.63911L13.7729 7.13912ZM2.27363 7.14356L13.7729 7.13912L13.7725 5.63911L2.27325 5.64355L2.27363 7.14356Z" fill="#757575" />
  </ArrowIcon>


);

const MinimizeSvg = styled.svg`
  fill: #757575;
  &:hover {
    path {
      fill: ${props => props.color};
    }
  };
  &:active {
    path {
      fill: ${props => props.color};
    }
  }
`;

export const MinimizeSVG = ({ color }) => (
  <MinimizeSvg color={color} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
    <path d="M12.9507 2.90918C12.9507 2.49497 12.6149 2.15918 12.2007 2.15918C11.7865 2.15918 11.4507 2.49497 11.4507 2.90918H12.9507ZM19.0415 10.5034C19.4557 10.5034 19.7915 10.1676 19.7915 9.7534C19.7915 9.33919 19.4557 9.0034 19.0415 9.0034V10.5034ZM11.4507 2.90918V8.7534H12.9507V2.90918H11.4507ZM13.2007 10.5034H19.0415V9.0034H13.2007V10.5034ZM11.4507 8.7534C11.4507 9.7199 12.2342 10.5034 13.2007 10.5034V9.0034C13.0626 9.0034 12.9507 8.89147 12.9507 8.7534H11.4507Z" fill="#757575" />
    <path d="M12.2983 8.59861C12.0038 8.88993 12.0012 9.36483 12.2925 9.65932C12.5838 9.95382 13.0586 9.95639 13.3531 9.66507L12.2983 8.59861ZM21.5277 1.57749C21.8221 1.28617 21.8247 0.811275 21.5334 0.51678C21.2421 0.222285 20.7673 0.219713 20.4728 0.511034L21.5277 1.57749ZM13.3531 9.66507L21.5277 1.57749L20.4728 0.511034L12.2983 8.59861L13.3531 9.66507Z" fill="#757575" />
    <path d="M9.04932 19.0869C9.04932 19.5011 9.3851 19.8369 9.79932 19.8369C10.2135 19.8369 10.5493 19.5011 10.5493 19.0869H9.04932ZM2.95848 11.4927C2.54427 11.4927 2.20848 11.8285 2.20848 12.2427C2.20848 12.6569 2.54427 12.9927 2.95848 12.9927V11.4927ZM10.5493 19.0869V13.2427H9.04932V19.0869H10.5493ZM8.79932 11.4927H2.95848V12.9927H8.79932V11.4927ZM10.5493 13.2427C10.5493 12.2762 9.76581 11.4927 8.79932 11.4927V12.9927C8.93739 12.9927 9.04932 13.1046 9.04932 13.2427H10.5493Z" fill="#757575" />
    <path d="M9.70173 13.3975C9.99619 13.1062 9.99876 12.6313 9.70748 12.3368C9.41619 12.0423 8.94136 12.0397 8.6469 12.331L9.70173 13.3975ZM0.472326 20.4186C0.17787 20.7099 0.175298 21.1848 0.466582 21.4793C0.757865 21.7738 1.2327 21.7764 1.52716 21.4851L0.472326 20.4186ZM8.6469 12.331L0.472326 20.4186L1.52716 21.4851L9.70173 13.3975L8.6469 12.331Z" fill="#757575" />
  </MinimizeSvg>


);

export const CloseSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
    <path fill="#757575" fillRule="nonzero" d="M7.5 6.124L13.624 0 15 1.376 8.876 7.5 15 13.624 13.624 15 7.5 8.876 1.376 15 0 13.624 6.124 7.5 0 1.376 1.376 0 7.5 6.124z" />
  </svg>
);

export default CloseSVG;
