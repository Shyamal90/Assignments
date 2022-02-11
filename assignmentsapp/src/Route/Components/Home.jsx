import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import './Home.css';

export default function Home() {

  const [users, setUsers] = useState([]);



  return (
    <div>
      <h1>Welcome to Home Page</h1>
      
    </div>
  )
}


//<h3><Link to={`/profile/${user.first_name}`}>{user.first_name}</Link></h3>