import React  from 'react';
import { AuthContext } from './AuthContext';
import { useContext } from "react";

function Profile() {
    const {username} = useContext(AuthContext);
  return (
    <div>
       <h1>This is Profile Page</h1>
       <p>username - {username}</p>
    </div>
  )
}

export default Profile
