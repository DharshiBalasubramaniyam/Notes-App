import './Styles.css';
import { Link } from 'react-router-dom';
import Notecard from './Notecard';

function Noteslist(props) {

    function getIdToRemove(id) {
        props.removeNote(id);
    }

    return(
        <>
            <header>
                <h1>Notes app</h1>
                <div>
                        <Link to="/newnote" className='btn'>New note</Link>
                </div>  
            </header>
            <section id='list'>
                <h1>My Notes</h1>

                <div className='notes-container'>
                {
                    props.list.map((note, index) => {
                        return (
                            <Notecard note={note} key={note.id} getId={getIdToRemove}/>
                        );
                    })
                }
                    
                   
                    
                    
                </div>
            </section>
        </>
        // 
    );
}

export default Noteslist;