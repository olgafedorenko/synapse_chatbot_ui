import React, { Component } from 'react';

import { Button, InputGeneral, Modal } from '../../src/index';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      isOpen: false
    };
  }

  render() {
    const { message, isOpen } = this.state;
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
            placeholder="Write a message..."
          />
          <Modal
            isOpen={isOpen}
            fullWidth
            closeModal={() => this.setState({ isOpen: false })}
            modalInnerStyle={{
              height: '160px',
              position: 'absolute',
              transform: 'translateY(0)',
              animation: 'moveEditExitModalUp 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
              WebkitAnimation: 'moveEditExitModalUp 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)'
            }}
          >
            <div>hello</div>
          </Modal>
          <Button onClick={() => this.setState({ isOpen: true })}>Open Modal</Button>
        </div>
      </div>
    );
  }
}

export default Home;
