import React from 'react'
import { useParams } from 'react-router-dom'

export default function Profile() {
    const {name} = useParams();
    // console.log(params);
  return (
    <div>
      <h1>Welcome {name}</h1>
    </div>
  )
}
