import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
width: 100%;
height: 3.25rem;
color: ${props => props.txtColor};
font-family: Nunito Sans;
font-size: 1rem;
font-weight: bold;
background-color: ${props => props.color};
border: none;
padding: 0 1rem;
outline: none;
transition: color, background-color;
transition-duration: 0.3s;
transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);

${props => props.style};
${props => props.styleDisabled};
`;

let transition;
class FullButton extends React.PureComponent {
  componentDidMount() {
    const { idx, delayTxt } = this.props;
    if (delayTxt) {
      setTimeout(() => {
        document.getElementById(idx).style.color = '#ffffff';
      }, 1000);
    }
  }

  // componentDidUpdate(prevProps) {
  //   const { idx, btnTxt, delayTxt } = this.props;
  //   if (prevProps.btnTxt !== btnTxt) transition = true;
  //   if (transition && delayTxt) {
  //     document.getElementById(idx).style.color = 'transparent';
  //     setTimeout(() => {
  //       document.getElementById(idx).style.color = '#ffffff';
  //       transition = false;
  //     }, 1000);
  //   }
  // }

  render() {
    const {
      idx,
      handleButtonSubmit,
      btnTxt,
      type,
      form,
      buttonColor,
      style,
      disable,
      disableText,
      delayTxt
    } = this.props;

    const styleDisabled = {
      backgroundColor: '#757575',
      cursor: 'unset',
      outline: 0,
      pointerEvents: 'none'
    };

    return (
      <ButtonStyle
        key={`inputboxBtn-${idx}`}
        id={idx}
        type={type}
        btnTxt={btnTxt}
        txtColor={delayTxt ? 'transparent' : '#ffffff'}
        color={buttonColor ? `#${buttonColor}` : 'black'}
        form={form}
        className="fullButton"
        onClick={disable ? null : handleButtonSubmit} // onMouseDown
        disable={disable}
        style={style}
        styleDisabled={disable ? styleDisabled : null}
      >
        {disable ? disableText : btnTxt}
        {/* {btnTxt === 'Secure bank login' ? <OpenNewWindowIcon fill={delayTxt ? 'transparent' : '#ffffff'} /> : null} */}
      </ButtonStyle>
    );
  }
}

export default FullButton;
