import React, {useState} from 'react';

type AuthUser = {
    name: string
    email: string
}

const User = () => {

    //Informisemo TS da user moze da bude null ili AuthUser koji smo definisali gore
    const [user, setUser] = useState<null | AuthUser>(null);
    //const [user, setUser] = useState<AuthUser>({} as AuthUser); //Ovako mozemo da stavimo ako smo sigurni da ce se null promeniti i nece se vracati 
    //Posle toga mozemo da sklonimo znak pitanja dole u XML-u

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

export default User;
