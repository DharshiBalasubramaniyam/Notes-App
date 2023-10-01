import { useLocation, Link } from 'react-router-dom';
import './Styles.css';

function DeleteNote(props) {
    const location = useLocation();
    const note = location.state;

    return(
        <>
            <header>
                <h1>Notes app</h1>
            </header>
            <section id='delete'>
                <div className="confirm-box">
                    <h1>Confirm - Delete</h1>
                    <p>Are you sure? <br/><br/> Permenently delete your note "{note.title}"? You can't undo this after deleting.</p>
                    <div>
                        <Link to="/" className="btn cancel">Cancel</Link>
                        <Link to="/"
                            className="btn delete"
                            onClick={() => {
                                return props.removeNote(note.id);
                            }}
                        >
                            Delete
                        </Link>
                    </div>
                   
                </div>
            </section>
        </>
    );
}

export default DeleteNote;