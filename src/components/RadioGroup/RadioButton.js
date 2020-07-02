import React from 'react';
import styled from 'styled-components';


const Label = styled.label`
  display: flex;
  border-radius: ${props => props.borderRadius};
  &:hover {
    .inner-circle {
      background-color: ${props => props.clientColor};
      opacity: ${(props) => {
    if (props.selected) return props.custom ? 0.5 : 1;
    return props.custom ? 0.2 : 0.5;
  }};
  }
`;

export const StyledOuterCircle = styled.div`
  margin: 0 1rem;
  height: 24px;
  width: 24px;
  border: ${props => (!props.custom ? '1px solid #B3B3B3' : 'none')};
  background-color: ${props => (!props.custom ? 'white;' : '#EEEEEE')};
  box-sizing: border-box;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledInnerCircle = styled.div`
  height: 16px;
  width: 16px;
  border: 1px solid white;
  background-color: ${props => (props.selected ? props.clientColor : 'white')};
  box-sizing: border-box;
  border-radius: 50%;
`;

export const StyledInnerCircleCustomized = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${props => (props.selected ? props.clientColor : 'white')};
  opacity: 0.5;
  box-sizing: border-box;
  border-radius: 50%;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const RadioButton = ({ label, checked, handleClick, clientColor, custom, borderRadius, checkListClassName }) => (
  <Label
    // key={`selection-${idx}-${Math.random()}`}
    htmlFor={label}
    className={checkListClassName}
    onClick={handleClick}
    onKeyPress={handleClick}
    clientColor={clientColor}
    borderRadius={borderRadius}
    custom={custom}
    selected={checked}
  >
    <Wrapper>
      <StyledOuterCircle custom={custom} className="outer-circle" selected={checked} clientColor={clientColor}>
        {custom
          ? <StyledInnerCircleCustomized className="inner-circle" selected={checked} clientColor={clientColor} />
          : <StyledInnerCircle className="inner-circle" selected={checked} clientColor={clientColor} />
        }
      </StyledOuterCircle>
    </Wrapper>
    <span>{label}</span>
  </Label>
);

export default RadioButton;
