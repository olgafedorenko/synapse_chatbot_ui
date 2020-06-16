import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import Color from 'color';
import hexToRgba from 'hex-to-rgba';
import * as SvgIcons from '../SvgIcons';
import utils from './util/util';


const Form = styled.form`
  z-index: 300;
	width: ${props => props.fullWidth ? '100%' : '90%'};
	height: ${props => props.fullWidth ? '3.25rem' : '3rem'};
  position: ${props => props.fullWidth ? 'absolute' : 'relative'};
  bottom: ${props => props.fullWidth ? '0' : null};
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #${props => props.clientColor};
	transition background-color 0.3s linear;
	border-radius: ${props => props.fullWidth ? null : '6px'};
	margin: ${props => props.fullWidth ? null : '0 auto'};
  `;

const InputBoxStyle = styled.input`
  width: 88%;
  font-family: Nunito Sans;
  font-size: 16px;
  outline: none;
  border: none;
  line-height: 1.5;
	letter-spacing: normal;
	color: ${props => props.fullWidth ? null : props.color};
  ::placeholder { 
    // transition: all cubic-bezier(0.25, 0.1, 0.25, 1) 0.3s;
    color:  ${props => props.placeholderColor};
  };
  padding: 18px 0px 18px 16px;
  background-color: transparent;
`;

const SendIcon = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  left: ${props => props.fullWidth ? '100%' : '110%'};
  // top: 25%;
  transition: all 0.3s linear;
  cursor: pointer;
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

class InputSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '#ffffff',
      placeholderColor: '#ffffff',
      clickCount: 0,
      showCloseIcon: false,
    };
  }

  updateValue = (e) => {
    e.preventDefault();
    const { clickCount } = this.state;
    const { onChange } = this.props;
    if (clickCount === 0) {
      this.setState({ clickCount: clickCount + 1 });
    }
    onChange(e);
  }

  updateStyleDiv = (e) => {
    e.preventDefault();
    const { clientColor, fullWidth } = this.props;
    document.getElementById('addForm').style.backgroundColor = 'white';
    document.getElementById('addForm').style.boxShadow = `0 -1px 4px 0 ${hexToRgba(clientColor, 0.6)}`;
    document.getElementById('closeIcon').style.transform = `${fullWidth ? 'translateX(-109%)' : 'translateX(-177%)'}`;
    this.setState({ color: '#333333', showCloseIcon: true, placeholderColor: '#B3B3B3' });
  }

  returnStyleBack = (e) => {
    e.preventDefault();
    const { removeMessage, clientColor, fullWidth } = this.props;
    if (fullWidth) removeMessage(e);
    document.getElementById('addForm').style.backgroundColor = `#${clientColor}`;
    document.getElementById('addForm').style.boxShadow = 'none';
    this.setState({ color: '#ffffff', showCloseIcon: false });
  }


  render() {
    const { placeholderColor, color } = this.state;
    const {
      value,
      handleSubmit,
      onChange,
      onFocus,
      clientColor,
			placeholder,
      fullWidth
    } = this.props;

    return (
      <Form
        id="addForm"
        onSubmit={handleSubmit}
        onClick={this.updateStyleDiv}
        clientColor={clientColor}
        fullWidth={fullWidth}
        required
      >
        <InputBoxStyle
          onChange={this.updateValue}
          onKeyUp={this.updateValue}
          fullWidth={fullWidth}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          type="number"
          value={value}
          color={color}
          clientColor={clientColor}
          placeholderColor={placeholderColor}
          name="message"
          id="inputBox"
          placeholder={placeholder}
          onFocus={onFocus}
        />
        <SendIcon onClick={handleSubmit} clientColor={clientColor} fullWidth={fullWidth} id="closeIcon">
					<SvgIcons.send clientColor={clientColor} id="sendBtn" />
        </SendIcon>
      </Form>
    );
  }
}

export default InputSearch;