import React from 'react'

//Ako hocemo da stavimo jednu komponentu u drugu pisemo ovako 
//U App.tsx stavljamo Heading komponentu u Oscar komponentu
type OscarProps = {
    children: React.ReactNode
}

const Oscar = ({children}: OscarProps ) => {


    return (
        <div>
            {children}
        </div>
    )
}

export default Oscar;
