import './Styles.css';
import { Link } from 'react-router-dom';

function Addnote() {
    return(
        <>
            <header>
                <h1>Notes app</h1>
                <div>
                        <Link to="/" className='btn'>View notes</Link>
                </div>  
            </header>
            <section>
                <h1>Add new note</h1>
            </section>
            
        </>
        // 
    );
}

export default Addnote;