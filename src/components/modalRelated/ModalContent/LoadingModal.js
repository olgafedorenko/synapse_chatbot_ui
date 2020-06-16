import React, { PureComponent } from 'react';

import { Button } from '../../../index';

class LoadingModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      timer: 300
    };
  }

  componentDidMount() {
    const { props } = this;
    this.countDownInterval = setInterval(() => {
      const { timer } = this.state;
      if (timer > 0) {
        this.setState({
          timer: timer - 1
        });
      } else if (timer === 0) {
        clearInterval(this.countDownInterval);
        props.updateModal('isModal', false);
        clearInterval(window.fetchInterval);
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.countDownInterval);
  }

  closeModal = () => {
    const { props } = this;
    // NOT WORK IN IOS
    if (window.winCapOne) (window.winCapOne).close();
    // when cancle the redirect, should clear interval
    clearInterval(window.fetchInterval);
    document.getElementsByClassName('modalInner')[0].style.animation = 'moveDown 0.3s cubic-bezier(0.25, 0.1, 0.25, 1) forwards';
    document.getElementsByClassName('modalInner')[0].style.WebkitAnimation = 'moveDown 0.3s cubic-bezier(0.25, 0.1, 0.25, 1) forwards';
    document.getElementsByClassName('modal')[0].style.animation = 'fadeOut 0.2s cubic-bezier(0.25, 0.1, 0.25, 1) forwards';
    document.getElementsByClassName('modal')[0].style.WebkitAnimation = 'fadeOut 0.2s cubic-bezier(0.25, 0.1, 0.25, 1) forwards';
    setTimeout(() => {
      props.updateModal('isModal', false);
    }, 200);
  }

  displayFullButton = () => {
    const { modalType, clientColor } = this.props;
    return (
      <div className="modal-button-container">
        <Button fullWidth idx="exit-modal-two" handleButtonSubmit={this.closeModal} btnTxt="Cancel" buttonColor={clientColor} />
      </div>
    );
  }

  displayCustomButton = () => {
    const { clientColor } = this.props;
    return (
      <div className="modal-button-container rounded" style={{ margin: '10% 1rem 0px 44px', position: 'unset', width: 'unset' }}>
        <Button fullWidth={false} idx="exit-modal-one" handleButtonSubmit={this.closeModal} btnTxt="Cancel" buttonColor={clientColor} />
      </div>
    );
  }

  render() {
    const { timer } = this.state;
    const { customButton } = this.props;
    const seconds = parseInt(timer % 60, 10);
    const minutes = parseInt(timer / 60, 10);
    return (
      <div>
        <div
          style={{ height: '100%', width: '100%', backgroundColor: 'white', paddingTop: '15%', borderRadius: '20px 20px 0 0' }}
        >
          <div className="loading_div">
            <img className="loading_bank_image" alt="bank_logo" />
            <div style={{ height: '50px', position: 'relative', marginTop: '10%' }}>
              Please link accounts within
              <div style={{ margin: '2px auto' }}>
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
              </div>
            </div>
          </div>

        </div>
        {
          customButton
            ? this.displayCustomButton()
            : this.displayFullButton()
        }
      </div>
    );
  }
}

export default LoadingModal;