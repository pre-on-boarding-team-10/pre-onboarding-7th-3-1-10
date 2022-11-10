import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/configStore';

import Router from './router';
import GlobalStyle from './styles/GlobalStyle';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.Fragment>
    <Provider store={store}>
      <GlobalStyle />
      <Router />
    </Provider>
  </React.Fragment>
);
