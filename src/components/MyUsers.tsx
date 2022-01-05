import React from 'react';


//Kada imamo niz objekata stavljamo array zagradu posle objekta kako bi ukazali da je to niz
type MyUserProps = {
    users: {
        name: string
        surname: string
        age: number
        isMarried: boolean
    }[]
}

const MyUsers = ({users}: MyUserProps) => {


    return (
        <div>
            {users.map(item => (
                <div>
                    <div>{item.name}</div>
                    <div>{item.surname}</div>
                    <div>{item.age}</div>
                    <div>{item.isMarried ? "Ozenjen" : "Nije ozenjen"}</div>
                </div>
            ))}
        </div>
    )
}

export default MyUsers;
