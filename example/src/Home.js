import React, { Component } from 'react';
import styled from 'styled-components';

import { Button, Dropup, InputSearch, InputGeneral, TextBubble, LoadingBubble, Modal, RadioButton, Header } from '../../src/index';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const step = {
  content: 'Hi there! I\'m here to help you link your bank account.',
  type: 'TEXT',
  autoTrigger: true,
  lastStep: false,
  inputBox: 'HIDE',
  progressStep: 0,
  stepName: 'initiate_chatbot'
}

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 'app',
      progressWidth: 0,
      message: ''
    };
  }

  updateMessage = (e) => {
    this.setState({ message: e.target.value });
    if (!this.addedTouchMove) {
      document.addEventListener('touchmove', () => {
        e.preventDefault();
      }, { passive: false });
      this.addedTouchMove = true;
    }
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  submit = (e) => {
    e.preventDefault();
    let submit;
    const { stepReducer } = this.props;
    const { message } = this.state;
    if (message.trim().length !== 0) this.handleSubmit(submit === false);
  }

  render() {
    const { message } = this.state;
    return (
      <div>
        <div>
          <InputGeneral 
            fullWidth
            isMobile={false}
            clientColor="000000"
            value={message}
            key="1"
            updateMessage={this.updateMessage}
            handleSubmit={this.submit}
            openEmoji={this.openEmoji}
            showEmoji={false}
            // updateCursorPosition={this.updateCursorPosition}
            placeholder="Write a message..."
            // handleFocus={isMobile ? this.handleFocus : null}
            // handleFileUpload={this.handleFileUpload}
            // accountVerify={verifyAccountReducer.accountVerify}
            // DOB={verifyAccountReducer.DOB}
          />
          {/* <InputSearch
            clientColor="000000"
            value={message}
            key="1"
            fullWidth
            onChange={this.updateMessage}
            // handleSubmit={this.submit}
            // updateStyle={this.updateStyle}
            // removeMessage={this.removeMessage}
            // placeholder={placeholder}
            // handleFocus={sandboxAndMobile ? this.handleFocus : null}
          /> */}
          <Modal
            modalType="EDIT"
            fullWidth
            modalInnerStyle={{
              height: '160px',
              position: 'absolute',
              transform: 'translateY(0)',
              animation: 'moveEditExitModalUp 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
              WebkitAnimation: 'moveEditExitModalUp 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)'
            }}
          />
          {/* <RadioButton /> */}
        </div>
        <div> 
          <Header 
              clientColor="000000"
              defaultPath="BANK_LOGINS"
              handleMinimize="function"
              headerText ="loggin into your bank"
              progressBar = "notvisual"
              progressIdx = "3"
              triggerModal = "function"
              isBusiness = {false}
              router={false}
              isBeta={false}
              />
        </div>
        {/* <div>
          <ProgressButton
            idx="secure-form-button" 
            form="secure-form" 
            btnTxt="hello"
            idTxt="submit"
            buttonColor="0000ff" 
            width={progressWidth} 
          />
        </div> */}
      </div>
    );
  }
}

export default Home;
