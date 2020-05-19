import React from 'react';
import styled from 'styled-components';

import Colors from '../../../src/colors';

const MainLayout = styled.div`
  & > * {
    padding: 32px 16px;
    border-bottom: 1px solid ${Colors.SILK_WHITE}
  }

  box-sizing: border-box;
  font-family: Roboto;

  display: flex;
  flex-direction: column;

  .custom-number-input {
    svg {
      display: none;
    }
  }
`;

class ExampleNumberInputs extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      phoneNumber: '',
      amount: '',
      date: ''
    }

    this.updateField = this.updateField.bind(this);
  }

  updateField(e, value, field) {
    if ((value || value === '') && field) {
      this.setState({ [field]: value });
    }
  }

  render(){
    return (
      <MainLayout>
        hello
      </MainLayout>
    )
  }
}

export default ExampleNumberInputs;