import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router';
import GlobalStyle from './styles/GlobalStyle';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.Fragment>
    <GlobalStyle />
    <Router />
  </React.Fragment>
);
