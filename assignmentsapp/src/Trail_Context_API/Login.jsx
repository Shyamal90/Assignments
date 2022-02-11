import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

function Login() {
    const [password,setPassword] = useState("");
    const [credential,setCredential] = useState({});
    const {username,setUsername,setShowProfile} = useContext(AuthContext);
    // console.log(setUsername);

    //fetch call
    useEffect(()=>{
      const getData = async()=>{
        const response = await fetch("https://reqres.in/api/users/2");
        const userData = await response.json();

        const userDetails = userData.data;
        const password = 123456;

        setCredential({...userDetails,password})
        console.log(userDetails);
      }

      getData();

    },[])
    // console.log(credential);
    const checkCredential = () =>{
        let email = credential.email;//orginal


        if(username === email && password == "123456"){
          setUsername(credential.first_name);
          setShowProfile(true);
          alert("Login Successfull")
          
        }else{
          alert("Invalid Credential")
        }
    }

// janet.weaver@reqres.in
  return (
    <div>
      <input
        type="text"
        placeholder='Enter Username...'
        onChange={(event)=>setUsername(event.target.value)}
      />

      <input 
         type="text" 
         placeholder='Enter Password...' 
         onChange={(event)=>setPassword(event.target.value)}
      />

      <button onClick={()=>checkCredential()}>Log In</button>

    </div>
  )
}

export default Login
