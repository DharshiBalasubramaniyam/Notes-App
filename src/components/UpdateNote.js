import { useLocation, Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import back from '../images/back.png';
import done from '../images/done.png';

function UpdateNote(props) {

    const location = useLocation();
    const note = location.state;

    const titleRef = useRef(null);

    const navigate = useNavigate();

    useEffect(()=> {
        titleRef.current.focus();
    }, [])

    const [input, setInput] = useState({
        id: note.id,
        title: note.title,
        description: note.description
    });

    function handleSubmit(e) {
        e.preventDefault();

        if (input.title==="") {
            alert('Title is required!'); return;
        }
        if (input.description==="") {
            alert('Description is required!'); return;
        }

        props.editNote(input);

        // alert('Note edited successfully!');

        navigate(-1);
    }
    return(
        <>
            <header>
                <h1>
                    <Link to={`/viewnote/${input.id}`} className='link'><img src={back} alt='back'/></Link>
                    Edit Note
                </h1>
                <img src={done} alt='done' onClick={handleSubmit}/>
            </header>
            <section>
                <form>
                    <input type='text' 
                        ref={titleRef}
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
                    ></textarea>
                    
                    
                </form>
            </section>
        </>
    );
}
export default UpdateNote;