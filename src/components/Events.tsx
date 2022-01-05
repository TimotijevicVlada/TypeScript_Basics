import React, {useState} from 'react';


const Events = () => {

    const [tekst, setTekst] = useState<string>("");
    const [tekstovi, setTekstovi] = useState<string[]>([]);

    const handleTekst = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTekst(event.target.value);
    }

    const handleIspisivanje = (e:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setTekstovi([...tekstovi, tekst]);
        setTekst("");
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTekstovi([]);
        setTekst("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleTekst}/>
                <button onClick={handleIspisivanje}>Klikni me</button>
                <button type='submit'>Submituj</button>
            </form>
            <div>{tekstovi}</div>
        </div>
    )
}

export default Events;
