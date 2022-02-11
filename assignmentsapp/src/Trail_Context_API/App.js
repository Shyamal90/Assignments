import React, { useState } from 'react';
import Login from './Login';
import Profile from './Profile';
import { AuthContext } from './AuthContext';
import Navbar from './Navbar';


function App() {
    const [showProfile, setShowProfile] = useState(false);
    const [username, setUsername] = useState("");

    return (
        <>
            <Navbar/>
            <AuthContext.Provider value={{ username, setUsername, setShowProfile }}>
                <div>
                    {
                        (showProfile) ? <Profile /> : <Login />
                    }
                </div>

            </AuthContext.Provider>
        </>


    )
}

export default App
