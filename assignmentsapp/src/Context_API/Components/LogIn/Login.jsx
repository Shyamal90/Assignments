import React, { useContext } from 'react';
import './Login.css';
import AuthContextProvider from '../../AuthContextProvider/AuthContextProvider';

function Login() {
  const authentication = useContext(AuthContextProvider);
  return (
    <div className='loginContainer'>
      
    </div>
  )
}

export default Login
