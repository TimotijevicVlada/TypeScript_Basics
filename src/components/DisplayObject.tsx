import React from 'react';

type DisplayProps = {
    myArray: {
        name: string
        surname: string
        age: number
    }[]
    myObj: {
        drzava: string
        grad: string
        ulica: string
    }
    isWorking: boolean
    brojGodina: number
    getNumber: React.MouseEventHandler<HTMLButtonElement>
    clgNum: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleSubmit:  React.FormEventHandler<HTMLFormElement> 
}

const DisplayObject = ({ myArray, myObj, isWorking, brojGodina, getNumber, clgNum, handleSubmit }: DisplayProps) => {
    return (
        <div>
            {myArray.map(item => (
                <div key={item.name}>
                    <span>{item.name}</span>
                    <span>{item.surname}</span>
                    <span>{item.age}</span>
                </div>
            ))}
            <div>
                <span>{myObj.drzava}</span> <span>{myObj.grad}</span> <span>{myObj.ulica}</span> <span>{isWorking ? "Zaposlen!" : "Nezaposlen!"}</span><span>godine: {brojGodina}</span>
            </div>
            <button onClick={getNumber}>Daj broj</button>
            <input onChange={(e) => clgNum(e)} type="text" placeholder='Type something'/>
            <form onSubmit={handleSubmit}>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default DisplayObject;
