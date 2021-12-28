import React, {useState} from 'react';

const LoggedIn = () => {

    //Na ovakvom primeru TS vec zna kakve su nam varijable i ne moramo da ih naznacavamo
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    }
    const handleLogout = () => {
        setIsLoggedIn(false);
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {isLoggedIn ? "Logged in" : "Logged out"}</div>
        </div>
    )
}

export default LoggedIn;
