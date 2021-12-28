import React from 'react';


//Ovako pisemo kada imam da prosledimo neki parametar 
//Ako hocemo da prosledjujemo neki parametar kao sto je ID onda samo stavimo zarez i deklarisemo promenjivu
type ButtonEventProps = {
    handleClick: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
}

const ButtonEvent = ({handleClick}: ButtonEventProps) => {

    return (
        <button onClick={(e) => handleClick(e, 5)}>
            Event Click
        </button>
    )
}

export default ButtonEvent;
