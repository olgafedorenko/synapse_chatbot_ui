/* eslint-disable react/jsx-filename-extension */
import React from 'react';

class App extends React.Component {
  state = { };

  render() {
    const { text, color } = this.props;
    return (
      <div>
        Hello world
      </div>
    );
  }
}

export default App;
