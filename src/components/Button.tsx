import React from 'react';


//Funkcija ne vraca nista VOID
//Ovo je kada nemamo parametre u funkciji
type ButtonProps = {
    handleClick: () => void
}

const Button = ({handleClick}: ButtonProps) => {
    return (
        <button onClick={handleClick}>
            Click
        </button>
    )
}

export default Button;
