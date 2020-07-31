import React, { Component } from "react";
import styled, { css } from "styled-components";
import Color from 'color';
import TextareaAutosize from 'react-autosize-textarea';
import InputMask from 'react-input-mask';
import CurrencyInput from './util/CurInput';
import utils from './util/util';
import * as SvgIcons from '../SvgIcons';

const Form = styled.form`
  z-index: 300;
  width: 100%;
  height: auto;
  padding: ${props => props.fullWidth ? '9px 8px 6px 13px' : '12px 10px'};
  position: relative;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  border: ${props => props.fullWidth ? 'solid 1px #dcdcdc' : null};
  border-width: ${props => props.fullWidth ? '1px 0 0 0' : null};
  margin-top: ${props => props.fullWidth ? null : '10px'};
`;

const InputBoxStyle = styled.div`
  display: ${props => props.fullWidth ? null : 'flex'};
  align-items: ${props => props.fullWidth ? null : 'center'};
  min-height: ${props => props.fullWidth ? '38px' : '34px'};
  max-height: ${props => props.fullWidth ? '138px' : '134px'};
  padding: ${props => props.fullWidth ? '0 5px' : null};
  margin: ${props => props.fullWidth ? null : '0 4px'};
  flex-grow: 1;
  border-radius: ${props => props.fullWidth ? null : '20px'};
  border: ${props => props.fullWidth ? null : 'none'};
  box-shadow: ${props => props.fullWidth ? null : '0px 0px 6px rgba(179, 179, 179, 0.4)'};

  textarea,
  input {
    font-family: Inter, sans-serif;
    font-size: 16px;
    outline: none;
    line-height: 1.25;
    letter-spacing: normal;
    ::placeholder {
      color: #dcdcdc;
    }
    padding: ${props => props.fullWidth ? '6px 12px' : '4px 12px'};
    -webkit-appearance: ${props => props.fullWidth ? 'none' : null};
    box-shadow: ${props => props.fullWidth ? 'none !important' : null};
    background-color: transparent;
    width: 100%;
    border-radius: 20px;
    border: ${props => props.fullWidth ? 'solid 1px #dcdcdc' : 'none'};
    background-color: #ffffff;
    resize: none;
    max-height: 134px;
    &:focus {
      border: ${props => props.fullWidth ? 'solid 1px #b3b3b3' : 'none'};
      box-shadow: ${props => props.fullWidth ? null : `0px 0px 6px ${props => (hexToRgba((`#${props.clientColor}`), 0.4))}`};
    }
    &:hover {
      border: ${props => props.fullWidth ? 'solid 1px #b3b3b3' : 'none'};
      box-shadow: ${props => props.fullWidth ? null : `0px 0px 6px ${props => (hexToRgba((`#${props.clientColor}`), 0.4))}`};
    }
  }
`;

const SendIcon = styled.div`
  cursor: pointer;
  padding: 2px;
  &:hover {
    svg {
      path {
        &:first-child {
          fill: ${(props) => utils.hoverColor(`#${props.clientColor}`)};
        }
      }
    }
  }
`;

const SendDiv = styled.div`
  cursor: poiner;
  &:hover, ${RoundBorder}:hover & {
    svg {
      path {
        fill: ${props => Color(`#${props.clientColor}`).darken(0.1).hex()};
      }
    }
  };
`;

const RoundBorder = styled.div`
  box-shadow: ${props => (props.showEmoji ? `0px 0px 6px ${(hexToRgba((`#${props.clientColor}`), 0.4))}` : '0px 0px 6px rgba(179, 179, 179, 0.4)')};
  width: 34px !important;
  height: 34px !important;
  border-radius: 50%;
  display: flex;
  cursor: pointer;
  padding: 10px;
  margin: 0 4px;
  justify-content: center;
  align-items: center;
  &:hover {
    box-shadow: 0px 0px 6px ${props => (hexToRgba((`#${props.clientColor}`), 0.4))};
  };
  
`;

const UploadDiv = styled.div`
  cursor: pointer;
  padding: 5px 8px;
  -webkit-transition: all 0.15s cubic-bezier(0.25, 0.1, 0.25, 1);
  -moz-transition: all 0.15s cubic-bezier(0.25, 0.1, 0.25, 1);
  transition: all 0.15s cubic-bezier(0.25, 0.1, 0.25, 1);
  &:hover, ${props => (props.fullWidth ? null : `${RoundBorder}:hover & `)} {
    svg {
      path {
        stroke: ${(props) => Color(`#${props.clientColor}`).darken(0.1).hex()};
      }
    }
  }
`;

const EmojiDiv = styled.div`
  cursor: pointer;
  padding: 5px;
  &:hover, ${props => (props.fullWidth ? null : `${RoundBorder}:hover & `)} {
    svg {
      path {
        fill: ${(props) =>
          Color(`#${props.clientColor}`).darken(0.1).hex()} !important;
      }
      path {
        fill: ${(props) =>
          Color(`#${props.clientColor}`).darken(0.1).hex()} !important;
      }
      path {
        fill: ${(props) =>
          Color(`#${props.clientColor}`).darken(0.1).hex()} !important;
      }
      path {
        fill: ${(props) =>
          Color(`#${props.clientColor}`).darken(0.1).hex()} !important;
      }
    }
  }
  ${props => (props.fullWidth ? null : '&:focus')} {
    svg {
      path {
        fill: ${props => Color(`#${props.clientColor}`).darken(0.1).hex()};
      }
      path {
        fill: ${props => Color(`#${props.clientColor}`).darken(0.1).hex()}; 
      }
      path {
        fill: ${props => Color(`#${props.clientColor}`).darken(0.1).hex()}; 
      }
      path {
        fill: ${props => Color(`#${props.clientColor}`).darken(0.1).hex()};
      }
    }
  };
`;

class InputGeneral extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#ffffff",
      placeholderColor: "#ffffff",
      showCloseIcon: false,
      heightForm: 52
    };
  }

  componentDidUpdate() {
    const { value } = this.props;
    if (!value) {
      document.getElementById("file").className += " fade-in";
    }
  }

  updateValue = (e) => {
    const { updateMessage, accountVerify, isMobile, fullWidth } = this.props;
    if (e.target.value) {
      if (fullWidth) {
        document.getElementById('input-box-wrapper').style.height = `${document.getElementById('inputBox').scrollHeight + 6}px`;
      } else {
        document.getElementById('input-box-wrapper-custom').style.height = `${document.getElementById('inputBox').scrollHeight + 6}px`;
      }
    } else {
      if (fullWidth) {
      document.getElementById("input-box-wrapper").style.height = "38px";
      } else {
        document.getElementById('input-box-wrapper-custom').style.height = '34px';
      }
    }
    if (!isMobile)
      document.getElementById("messages-content-wrapper").scrollIntoView(false);
      updateMessage(e);
  };

  onEnterPress = (e) => {
    const { handleSubmit, isMobile } = this.props;
    if (e.keyCode === 13 && e.shiftKey === false && !isMobile) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  openEmojiModal = (e) => {
    e.preventDefault();
    const { openEmoji } = this.props;
    openEmoji(e);
  };

  render() {
    const {
      placeholderColor,
      color,
      showCloseIcon,
      heightForm
    } = this.state;
    const {
      value,
      handleSubmit,
      handleFocus,
      clientColor,
      placeholder,
      updateCursorPosition,
      handleFileUpload,
      isMobile,
      fullWidth,
      isMask,
      isCur,
      noEmoji,
      noUpload,
      onChange,
      DOB
    } = this.props;

    const acceptedFileTypes =
      "image/jpeg, image/png, application/pdf, video/quicktime, video/mp4, video/webm, video/webm;codecs=vp9, video/webm;codecs=vp8";
    let inputlong;
    if (isMobile) {
      inputlong = "mobileInput";
    } else {
      inputlong = "desktopInput";
    }
    const userAgent = window.navigator.userAgent.toLowerCase();
    let safari;
    const ios = /iphone|ipod|ipad/.test(userAgent);
    if (
      window.navigator.userAgent.search("Safari") >= 0 &&
      window.navigator.userAgent.search("Chrome") < 0
    ) {
      safari = true;
    } else {
      safari = false;
    }

    return (
      <React.Fragment>
        <Form
          id="addForm"
          onSubmit={handleSubmit}
          clientColor={clientColor}
          heightForm={heightForm}
          required
        >
          {!isMobile ? 
            fullWidth ? (
              <EmojiDiv
                id="emojiDiv"
                onClick={this.openEmojiModal}
                clientColor={clientColor}
                style={noEmoji ? {display: 'none'} : null}
              >
                <SvgIcons.emoji clientColor={clientColor} />
              </EmojiDiv>
            ) : (
              <RoundBorder
                clientColor={clientColor}
                id="emojiIcon"
                tabindex="0"
                showEmoji={showEmoji}
                onClick={this.openEmojiModal}
              >
                <EmojiDiv id="emojiDiv" clientColor={clientColor} fullWidth={false} style={noEmoji ? {display: 'none'} : null}>
                  <EmojiIcon clientColor={clientColor} />
                </EmojiDiv>
              </RoundBorder>
            )
          : null
          }
          {
            fullWidth ?
            (
              <UploadDiv
              clientColor={clientColor}
              className={value ? "hidden" : "active"}
              style={noUpload ? {display: 'none'} : null}
              id="file"
            >
              <div className="image-upload">
                <label htmlFor="file-input">
                  <SvgIcons.upload clientColor={clientColor} />
                  <input
                    id="file-input"
                    style={{ display: "none" }}
                    type="file"
                    value=""
                    accept={acceptedFileTypes}
                    onChange={handleFileUpload}
                  />
                </label>
              </div>
            </UploadDiv>
            ) : (
            <RoundBorder clientColor={clientColor} className={value ? 'hidden' : 'active'} id="file">
              <UploadDiv clientColor={clientColor} style={noUpload ? {display: 'none'} : null}>
                <div className="image-upload" style={{ height: '22px' }}>
                  <label htmlFor="file-input">
                    <UploadIcon clientColor={clientColor} />
                    <input id="file-input" style={{ display: 'none' }} type="file" value="" accept={acceptedFileTypes} onChange={handleFileUpload} />
                  </label>
                </div>
              </UploadDiv>
            </RoundBorder>
            )
          }
          <InputBoxStyle 
            id={fullWidth ? "input-box-wrapper" : "input-box-wrapper-custom"}
            clientColor={fullWidth ? null : clientColor}
            placeholderColor={fullWidth ? null : placeholderColor}
            isMobile={fullWidth ? null : isMobile}
          >
            {isMask 
            ? (
              isCur ? 
              <CurrencyInput 
                placeholder="$0.00" 
                type="text" 
                onChange={this.updateValue}
                onKeyDown={this.onEnterPress}
                value={value}
                color={color}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                id="inputBox"
                className={value ? inputlong : null}
              />
              :
              <InputMask
                mask='99/99'
                name="dob"
                placeholder='mm/dd'
                onChange={this.updateValue}
                onKeyDown={this.onEnterPress}
                value={value}
                color={color}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                id="inputBox"
                className={value ? inputlong : null}
              />
            )
            : (
                <TextareaAutosize
                  onChange={this.updateValue}
                  onKeyDown={this.onEnterPress}
                  value={value}
                  color={color}
                  name="message"
                  id="inputBox"
                  placeholder={placeholder}
                  onKeyUp={updateCursorPosition}
                  onClick={updateCursorPosition}
                  onFocus={handleFocus}
                  className={value ? inputlong : null}
                />
              )
            }
          </InputBoxStyle>
          {
            fullWidth ? (
              <SendIcon
              onClick={handleSubmit}
              clientColor={clientColor}
              id="closeIcon"
            >
              <SvgIcons.send clientColor={clientColor} id="sendBtn" />
            </SendIcon>
            ) : (
              <RoundBorder onClick={handleSubmit} clientColor={clientColor}>
              <SendDiv clientColor={clientColor} style={{ height: '18px' }}>
                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.47362 14.9921C1.95051 14.6911 1.28237 14.8712 0.9813 15.3943C0.68023 15.9174 0.860247 16.5855 1.38336 16.8866L2.47362 14.9921ZM9.27492 1.10655L9.93124 0.232701C9.47977 -0.106388 8.84421 -0.0456983 8.46511 0.37272L9.27492 1.10655ZM3.79011 5.53201C3.38478 5.97923 3.41878 6.67041 3.86613 7.07561C4.31335 7.48094 5.00452 7.44694 5.40973 6.9996L3.79011 5.53201ZM14.6293 6.4947C15.112 6.85716 15.797 6.75978 16.1594 6.27722C16.5219 5.79454 16.4245 5.10956 15.942 4.7471L14.6293 6.4947ZM1.38336 16.8866C2.38052 17.4604 3.62424 17.9358 4.91466 17.9815C6.24054 18.0285 7.61232 17.6161 8.71489 16.4324C9.78638 15.2821 10.5024 13.5117 10.8052 11.036C11.1089 8.55158 11.009 5.25831 10.3555 0.942913L8.19433 1.27019C8.8311 5.4747 8.90663 8.55376 8.6356 10.7707C8.36348 12.9964 7.75463 14.2565 7.11555 14.9426C6.50756 15.5953 5.78312 15.8251 4.99201 15.7972C4.1652 15.768 3.27088 15.451 2.47362 14.9921L1.38336 16.8866ZM8.46511 0.37272L3.79011 5.53201L5.40973 6.9996L10.0847 1.84038L8.46511 0.37272ZM8.6186 1.9804L14.6293 6.4947L15.942 4.7471L9.93124 0.232701L8.6186 1.9804Z" fill="#757575" />
                </svg>
              </SendDiv>
            </RoundBorder>                
            )
          }
        </Form>
      </React.Fragment>
    );
  }
}

export default InputGeneral;
