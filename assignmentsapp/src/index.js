import React from 'react';
import ReactDOM from 'react-dom';
import App from './Context_API/App';
import AuthContextProvider from './Context_API/AuthContextProvider/AuthContextProvider'


ReactDOM.render(
  <>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </>,
  document.getElementById('root')
);


