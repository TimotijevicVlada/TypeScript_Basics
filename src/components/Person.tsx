import React from 'react'

//Kada pisemo TS objekat onda stavimo objekat unutar Propsa i deklarisemo tipove promenjivih
type PersonProps = {
    name: {
        first: string
        last: string
    }
}

const Person = ({name}: PersonProps) => {


    return (
        <div>
            {name.first} {name.last}
        </div>
    )
}

export default Person;
