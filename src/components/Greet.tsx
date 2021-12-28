import React from 'react';

//Type using for Application and inteface using for Libraries
//Ako hocemo da nam neki props bude opcioni onda stavljamo ? posle imena
type GreetProps = {
    name: string
    surname: string
    message?: number
    isMessage: boolean
}

//Ako hocemo da stavimo default vrednost za neki props moze i ovako sa message
const Greet = ({name, surname, message = 0, isMessage}: GreetProps) => {


    return (
        <div>
            {isMessage && <h2>Welcome {name} {surname}! You have {message} unread messages</h2>}
        </div>
    )
}

export default Greet;
