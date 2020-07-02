import React, { Component } from "react";
import styled from "styled-components";

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
  // default value
  height: 160px;
  position: absolute;
  transform: translateY(0);
  animation: moveEditExitModalUp 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  WebkitAnimation: moveEditExitModalUp 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  @media only screen and (max-width: 420px) {
    max-width: 100%;
  }
`;

const InnerContainer = styled.div`
  text-align: center;
  height: 100%;
`;

const Container = styled.div`
  height: 100%;
`;

const CoverAllDark = styled.div`
  visibility: visible;
  top: 0;
`;

class ModalContainer extends Component {

  componentDidUpdate(prevProps) {
    const { isOpen } = this.props;

    if (isOpen && (prevProps.isOpen !== isOpen)) {
      this.openModal(nextProps.children);
    }
  }

  renderInnerModal = () => {
    const { customModalComponent, ...restOfProps } = this.props;

    if (customModalComponent) {
      return React.cloneElement(customModalComponent, { ...restOfProps });
    }

    const {
      children,
      modalInnerStyle,
      className,
    } = this.props;

    return (
      <InnerBox 
        className={className} 
        style={modalInnerStyle} 
        onClick={e => e.stopPropagation()}
      >
        <InnerContainer>
          <Container>
            <Container>
              {children}
            </Container>
          </Container>
        </InnerContainer>
        <CoverAllDark />
      </InnerBox>
    );
  };

  openModal = (children) => {
    const {
      closeModal,
      disableOutsideOnClick,
    } = this.props;

    return (
      <OuterBox 
        onClick={e => {
          if (!disableOutsideOnClick) closeModal();}
        }
      >
        <InnerBoxPositioning>
          {this.renderInnerModal()}
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
