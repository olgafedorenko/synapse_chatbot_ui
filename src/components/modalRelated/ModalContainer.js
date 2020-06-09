import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import LoadingModal from './ModalContent/LoadingModal';
import RatingModal from './ModalContent/RatingModal';
import EditModal from './ModalContent/EditModal';

const OuterBox = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 300;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  transition: background-color 0.3s;
`;

const InnerBoxPositioning = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const InnerBox = styled.div`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;
  bottom: 0;
  max-width: 400px;
  margin: auto 0;
  background: white;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  z-index: 900;
  animation: moveUp 0.55s cubic-bezier(0.25, 0.1, 0.25, 1);
  -webkit-animation: moveUp 0.55s cubic-bezier(0.25, 0.1, 0.25, 1);
  -moz-animation: moveUp 0.55s cubic-bezier(0.25, 0.1, 0.25, 1);
  -ms-animation: moveUp 0.55s cubic-bezier(0.25, 0.1, 0.25, 1);
  -o-animation: moveUp 0.55s cubic-bezier(0.25, 0.1, 0.25, 1);
  transition: height 0.3s linear;
  @media only screen and (max-width: 420px) {
    max-width: 100%;
  }    
`;

const InnerContainer = styled.div`
  text-align: center;
  height: 100%;
`;

const Container = styled.div`
  height: '100%';
`;

const CoverAllDark = styled.div`
  visibility: 'visible';
  top: 0;
`;

class ModalContainer extends PureComponent {

  openModal(children) {
    const {
      clientColor,
      modalStyle,
      closeModal,
      modalInnerStyle,
      modalType,
      fullWidth
    } = this.props;

    const closeAndRemoveOverflowHidden = () => {
      document.getElementsByTagName('body')[0].style.overflow = 'visible';
      closeOptions();
    };

    let modalContent;
    switch (modalType) {
      case ('SECURITY'): // modal with image && link
        modalContent = <SecureModal sandboxMode={sandboxMode} isMobile={isMobile} updateUserInput={this.updateUserInput} modalType={modalType} expireBannerFunc={this.expireBannerFunc} fullWidth={fullWidth} />;
        break;
      case ('LOADING'): // modal with image && link
        // modalHeight = '320px';
        // boxShadow = 'none';
        modalContent = <LoadingModal fullWidth={fullWidth} />;
        break;
      case ('EDIT'): // modals for edit/eist/startover
        modalContent = (
          <EditModal
            modalType={modalType}
            // firstStepIndex={firstStepIndex}
            updateKey={this.updateKey}
            fullWidth={fullWidth}
            clientColor={clientColor}
          />
        );
        break;
      case ('TERMINATED'):
        // modalHeight = '156px';
        modalContent = (
          <EditModal
            modalType={modalType}
            firstStepIndex={firstStepIndex}
            updateKey={this.updateKey}
            terminate
            fullWidth={fullWidth}
          />
        );
        break;
      case ('RATING'):
        // modalHeight = '214px';
        modalContent = <RatingModal modalType={modalType} fullWidth={fullWidth} />;
        break;
      default:
        return;
    }

    return (
      <OuterBox
        id="modal"
        style={modalStyle}
      >
        <InnerBoxPositioning onClick={e => closeModal()} onKeyPress={e => closeModal()}>
          <InnerBox
            style={modalInnerStyle}
          >
            <InnerContainer>
              <Container>
                <div
                  className="close"
                  onClick={closeAndRemoveOverflowHidden}
                  onKeyPress={closeAndRemoveOverflowHidden}
                />
                <Container>
                  {/* {children} */}
                  {modalContent}
                </Container>
              </Container>
            </InnerContainer>
            <CoverAllDark onClick={closeAndRemoveOverflowHidden} onKeyPress={closeAndRemoveOverflowHidden} />
          </InnerBox>
        </InnerBoxPositioning>
      </OuterBox>
    );
  }

  render() {
    if (this.props.isOpen) return this.openModal(this.props.children);
    return null;
  }
}

export default ModalContainer;
