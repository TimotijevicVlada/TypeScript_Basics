import {useEffect, useRef} from 'react';

const DomRef = () => {

    //Ovako postavljamo uzvicnik ako hocemo da ne proveravamo dole sa znakom putanja na current
    const inputRef = useRef<HTMLInputElement>(null!);

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    return (
        <div>
            Hello from the DomRef
            <input type="text"  ref={inputRef}/>
        </div>
    )
}

export default DomRef;
