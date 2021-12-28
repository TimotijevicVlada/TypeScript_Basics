import React from 'react';

//Type using for Application and inteface using for Libraries
type GreetProps = {
    name: string
    surname: string
    message: number
    isMessage: boolean
}

const Greet = ({name, surname, message, isMessage}: GreetProps) => {


    return (
        <div>
            {isMessage && <h2>Welcome {name} {surname}! You have {message} unread messages</h2>}
        </div>
    )
}

export default Greet;
