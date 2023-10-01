import { useLocation, Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function UpdateNote(props) {

    const location = useLocation();
    const note = location.state;

    const navigate = useNavigate();
    // console.log(note);

    const [input, setInput] = useState({
        id: note.id,
        title: note.title,
        description: note.description
    });

    function handleSubmit(e) {
        e.preventDefault();
        props.editNote(input);

        alert('Note edited successfully!');

        navigate(-1);
    }
    return(
        <>
            <header>
                <h1>Notes app</h1>
            </header>
            <section>
                <form onSubmit={handleSubmit}>
                    <h1>Edit Note</h1>

                    <input type='text' 
                        placeholder='Title'
                        value={input.title}
                        onChange={(e) => {
                            setInput(previousState => {
                                return {...previousState, title: e.target.value}
                            })
                        }}
                       
                    /><br/>

                    <textarea 
                        placeholder='Description' 
                        rows={15}
                        value={input.description}
                        onChange={(e) => {
                            setInput(previousState => {
                                return {...previousState, description: e.target.value}
                            })
                        }}
                    ></textarea><br/>
                    <div className='btns'>
                    <Link to="/" className='link'><input type='submit' value='Cancel' className='cancel'/></Link>
                    <input type='submit' value='Update' />
                    </div>
                    
                </form>
            </section>
        </>
    );
}
export default UpdateNote;