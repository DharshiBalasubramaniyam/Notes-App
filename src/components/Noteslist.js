import './Styles.css';
import { Link } from 'react-router-dom';

function Noteslist() {
    return(
        <>
            <header>
                <h1>Notes app</h1>
                <div>
                        <Link to="/newnote" className='btn'>New note</Link>
                </div>  
            </header>
            <section>
                <h1>My Notes</h1>
            </section>
        </>
        // 
    );
}

export default Noteslist;