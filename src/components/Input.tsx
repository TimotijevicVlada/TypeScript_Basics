import React from 'react';


//Ovako hendlujemo input event, slicno kao i click event
type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({value, handleChange} : InputProps) => {

    //Ovako hendlujemo kada smo na istoj strani
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
    }

    return (
        <div>
             <input type="text" value={value} onChange={handleChange}/>
             <input type="text" onChange={handleOnChange}/>
        </div>
       
    )
}

export default Input;
