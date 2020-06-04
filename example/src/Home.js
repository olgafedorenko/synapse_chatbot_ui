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

import { Button, Dropup, Header } from '../../src/index';
// import { ProgressButton } from '../../src/index';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
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
      progressWidth: 0
    };
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
    // const { progressWidth } = this.state;
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
          <Dropup
            fullWidth
            hide={false}
            items={
              [
                { key: 'cat', text: 'Cat' },
                { key: 'dog', text: 'Dog' },
                { key: 'mouse', text: 'Mouse' },
              ]
            }
            handleButtonSubmit={this.handleChosenSuggestion}
          />
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
