import React, { Component } from 'react';

import styled from 'styled-components';

const FlexAlignButtons = styled.div`
  display: flex;
  justify-content: flex-start;

  button {
    margin-right: 8px;
  }
`;

import App from './App';
import FormApp from './FormApp';
import ExAnchorButtons from './components/ExAnchorButtons';
import ExButtonGroup from './components/ExButtonGroup';
import LoadingCube from '../../src/components/LoadingCube/LoadingCube';
import ExampleModalBasic from './components/ExampleModalBasic';
import SubModalContainer from './components/SubModalContainer';

import { Button, Dropup, InputSearch, InputGeneral, TextBubble, LoadingBubble, Modal, RadioButton } from '../../src/index';
// import { ProgressButton } from '../../src/index';

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

const pages = {
  app: {
    name: 'App',
    component: <App />,
  },
  form: {
    name: 'FormApp',
    component: <FormApp />,
  },
  anchorButtons: {
    name: 'Anchor Buttons',
    component: <ExAnchorButtons />,
  },
  buttonGroups: {
    name: 'Button Groups',
    component: <ExButtonGroup />,
  },
  loadingGroup: {
    name: 'Loading Groups',
    component: <LoadingCube color={getRandomColor()} />,
  },
  Modal: {
    name: 'Modal',
    component: <ExampleModalBasic />,
  },
  Modal: {
    name: 'Modal w submodal',
    component: <SubModalContainer />,
  },
};

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
    // let's keep this clean
    // update Message just handle the input onchange
    // closeBanner();
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
    // console.log("olga", message, message.length !== 0, _.isEqual('__/__/____', message))
    // const compareEmpty = _.isEqual('__/__/____', message);
    if (message.trim().length !== 0) this.handleSubmit(submit === false);
  }


  // componentDidMount() {
  //   this.updateProgress();
  // }

  // resetProgress = () => {
  //   this.progressInterval = setInterval(() => {
  //     if (this.timer >= 4) {
  //       this.setState({ progressWidth: 100 });
  //       this.timer = 0;
  //       clearInterval(this.progressInterval);
  //       clearInterval(this.funFactInterval);
  //       clearInterval(this.buttonPressTimer);
  //     }
  //   });
  // }

  // updateProgress = () => {
  //   let count = 0;
  //   this.buttonPressTimer = setInterval(() => {
  //     count += 5;
  //     this.timer += 1;
  //     if (count > 99) {
  //       this.setState({ progressWidth: 100 });
  //       clearInterval(this.buttonPressTimer);
  //     } else {
  //       this.setState({ progressWidth: count });
  //     }
  //   }, 1000);
  // }

  render() {
    const { message } = this.state;
    return (
      <div>
        <FlexAlignButtons>
          {Object.keys(pages).map((pageKey, idx) => {
            return (
              <Button
                key={pageKey}
                type="button"
                value={pageKey}
                onClick={() => this.setState({ currentPage: pageKey })}
              >
                {pages[pageKey].name}
              </Button>
            );
          })}
        </FlexAlignButtons>

        {pages[this.state.currentPage].component}
        <div>
          {/* <InputGeneral 
            isMobile={false}
            clientColor="000000"
            value={message}
            key="1"
            updateMessage={this.updateMessage}
            handleSubmit={this.submit}
            openEmoji={this.openEmoji}
            // updateCursorPosition={this.updateCursorPosition}
            placeholder="Write a message..."
            // handleFocus={isMobile ? this.handleFocus : null}
            // handleFileUpload={this.handleFileUpload}
            // accountVerify={verifyAccountReducer.accountVerify}
            // DOB={verifyAccountReducer.DOB}
          /> */}
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
