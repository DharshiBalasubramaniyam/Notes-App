import './Styles.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Addnote(props) {

    const navigate = useNavigate();

    const [input, setInput] = useState({
        id: "",
        title: "",
        description: ""
    });

    function handleSubmit(e) {
        e.preventDefault();

        if (input.title==="") {
            alert('Title is required!'); return;
        }
        if (input.description==="") {
            alert('Description is required!'); return;
        }

        props.addNote(input);
        setInput(previousState => {
            return {...previousState, title: "", description: ""}
        })

        alert('New note added successfully!');

        navigate(-1);
    }

    return(
        <>
            <header>
                <h1>Notes app</h1>
                <div>
                        <Link to="/" className='btn'>View notes</Link>
                </div>  
            </header>
            <section>
                <form onSubmit={handleSubmit}>
                    <h1>Add New Note</h1>

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

                    <input type='submit' value='Add' />
                </form>
            </section>
            
        </>
        // 
    );
}

export default Addnote;