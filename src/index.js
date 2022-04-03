import React from 'react';
import ReactDOM from 'react-dom';
import Root from './pages/Root';
import GlobalStyle from './globalStyle';

ReactDOM.render(
  <React.StrictMode>
    <Root />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
