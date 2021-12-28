import React from 'react'

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
