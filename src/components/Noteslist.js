import './Styles.css';
import { Link } from 'react-router-dom';
import Notecard from './Notecard';
import Addnote from './Addnote';

function Noteslist(props) {

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
                            <Notecard note={note} key={index}/>
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