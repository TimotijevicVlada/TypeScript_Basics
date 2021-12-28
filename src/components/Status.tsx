import React from 'react'


//Ako hocemo da striktno ogranicimo na ova tri stringa
type StatusProps = {
    status: "loading" | "success" | "error"
    //ili ovo => status: string
}

const Status = ({status}: StatusProps) => {

    let message;
    if(status === "loading") {
        message = "Loading...";
    } else if (status === "success") {
        message = "Data fetched successfuly";
    } else if(status === "error") {
        message = "Error fetching data";
    }

    return (
        <div>
            <h2>{message}</h2>
        </div>
    )
}

export default Status;
