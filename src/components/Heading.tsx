import React from 'react';


//Children props koristimo kada hocemo da sve sto se nalazi izmedju headinga u App definisemo
type HeadingProps = {
    children: string
}

const Heading = ({children} : HeadingProps) => {



    return (
        <div>
            <h3>{children}</h3>
        </div>
    )
}

export default Heading;
