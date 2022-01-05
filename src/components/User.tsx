import { useState } from 'react';

type AuthUser = {
        name: string
        email: string
}

const User = () => {

    //Informisemo TS da user moze da bude null ili AuthUser koji smo definisali gore
    const [user, setUser] = useState<AuthUser[]>([]);
    //const [user, setUser] = useState<AuthUser>({} as AuthUser); //Ovako mozemo da stavimo ako smo sigurni da ce se null promeniti i nece se vracati 
    //Posle toga mozemo da sklonimo znak pitanja dole u XML-u

    const users = [{
        name: "Vlada",
        email: "vlada@gmail.com"
    },
    {
        name: "Pera",
        email: "pera@gmail.com"
    },
    {
        name: "Laza",
        email: "laza@gmail.com"
    }]

    const handleLogin = () => {
        setUser(users)
    }

    const handleLogout = () => {
        setUser([]);
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            {user.map(item => (
                <div>
                    <div>{item.name}</div>
                    <div>{item.email}</div>
                </div>
            ))}
        </div>
    )
}

export default User;
