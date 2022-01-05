import { ChangeEvent, useState } from 'react';
import { useSelector } from "react-redux";
import { NotesState } from "./store/notesReducer";
import { useDispatch } from "react-redux";




const ReactReduxTS = () => {

    const [note, setNote] = useState<string>("");

    //Funkcija koja apdejtuje state
    const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value);
    }


    //Ovo je stejt koji cu posle da ispisujem u HTML-u
    const notes = useSelector<NotesState, NotesState["notes"]>(state => state.notes);

    console.log(notes)

    //Dispatch je akcoja kojom menjam stejt
    const dispatch = useDispatch();

    //Funkcija koja poziva reduks da odradi svoj posao
    const addNote = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //This could be a possible mistake let's change it
        dispatch({ type: "ADD_NOTE", payload: note });
        setNote("");
    }

    return (
        <div className='redux'>
            <hr />
            <form onSubmit={addNote}>
                <input onChange={updateNote} value={note} type="text" name='note' placeholder='Note' />
                <button type='submit'>Add note</button>
            </form>

            <ul>
                {notes.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <hr />
        </div>
    )
}

export default ReactReduxTS;
