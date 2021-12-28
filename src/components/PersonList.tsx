import React from 'react'

//Kada imamo niz objekata stavljamo array zagrade kako bi TS znao da je to niz
type PersonListProps = {
    names: {
        first: string
        last: string
    }[]
}

const PersonList = ({names}: PersonListProps) => {


    return (
        <div>
            {names.map(name => (
                <h2>{name.first} {name.last}</h2>
            ))}
        </div>
    )
}

export default PersonList;
