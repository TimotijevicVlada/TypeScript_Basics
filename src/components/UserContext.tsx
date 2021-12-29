import { useContext } from 'react';
import { UserContextt } from "./context/Context";

const UserContext = () => {

    const {user, setUser} = useContext(UserContextt);

    const handleLogin = () => {
            setUser({
                name: "Vladimir",
                email: "vlada@gmail.com"
            })
    }

    const handleLogout = () => {
            setUser(null);
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
        </div>
    )
}

export default UserContext;
