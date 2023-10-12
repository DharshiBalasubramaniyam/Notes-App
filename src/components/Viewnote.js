import { Link, useParams} from 'react-router-dom';
import compose from '../images/compose.png';
import trash from '../images/trash-can.png';
import { useEffect, useState } from 'react';

function Viewnote() {

    const [note, setNote] = useState({
    });
    const {id} = useParams();

    useEffect(()=> {
        const storageNotes = JSON.parse(localStorage.getItem("notes"));
        if(storageNotes) {
            const filtered = storageNotes.filter((note) => {
                return note.id === id;
            }) 
            setNote(filtered[0]);
        }

    }, [id])

    return(
        <>
            <header>
                <div className='back'>
                    <Link to="/" className='btn'>Back to notes</Link>
                </div> 
                <Link to={`/deletenote/${note.id}`} state={note}><img src={trash} alt='trash' className='trash'/></Link>
                <Link to={`/updatenote/${note.id}`} state={note}><img src={compose} alt='edit' className='edit'/></Link> 
            </header>
            <section className='viewnotes'>
                <h2>{note.title}</h2>
                <p>{note.description}</p>
            </section>
        </>
    );
}

export default Viewnote;