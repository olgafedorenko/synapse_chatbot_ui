import ReactDOM from 'react-dom';
import React from 'react';

import { Provider } from 'react-redux';
import Main from './src/components/index';
import store from './src/store/store';

ReactDOM.render(
  <div>
    <Provider store={store}>
      <Main />
    </Provider>
  </div>, document.querySelector('#app')
);
