import React from 'react';
import styled from 'styled-components';
import hexToRgba from 'hex-to-rgba';

const ButtonStyle = styled.button`
	width: ${props => props.fullWidth ? '100%' : '90%'};
	height: ${props => props.fullWidth ? '3.25rem' : '3rem'};
	color: ${props => props.txtColor};
	border-radius: ${props => props.fullWidth ? null : '6px'};
	box-shadow: ${props => props.fullWidth ? `0 2px 4px 0 ${props => (props.disable ? '#757575' : hexToRgba(props.color, 0.6))}`: null};
	font-family: Nunito Sans;
	font-size: 1rem;
	font-weight: bold;
	background-color: ${props => props.color};
	border: none;
	padding: 0 1rem;
	outline: none;
	transition: ${props => props.fullWidth ? 'color, background-color' : 'color, background-color, box-shadow'};
	transition-duration: 0.3s;
	transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);

	${props => props.style};
	${props => props.styleDisabled};
`;

const Button = (props) => {
  const {
    id,
    onClick,
    type,
    form,
    buttonColor,
    style,
    isDisabled,
		disableText,
		fullWidth
  } = props;

	const styleDisabled = {
		backgroundColor: '#757575',
		cursor: 'unset',
		outline: 0,
		pointerEvents: 'none'
	};

	const text = isDisabled ? disableText : props.children;

  return (
    <ButtonStyle
			id={id}
			key={`inputboxBtn-${id}`}
			type={type}
			txtColor={buttonColor === '#ffffff' ? 'black' : '#ffffff'}
			color={buttonColor ? `#${buttonColor}` : 'black'}
			form={form}
			className="fullButton"
			isDisabled={isDisabled}
			onClick={isDisabled ? null : onClick} // onMouseDown
			style={style}
			styleDisabled={isDisabled ? styleDisabled : null}
			fullWidth={fullWidth}
  >
		{text}
  </ButtonStyle>
  )
}

export default Button;
