import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/GlobalStyle';
import Main from './pages/Main';

ReactDOM.render(
  <>
    <GlobalStyle />
    <Main />
  </>,
  document.getElementById('root')
);
