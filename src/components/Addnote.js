import './Styles.css';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Addnote(props) {

    const navigate = useNavigate();
    const titleRef = useRef(null);

    useEffect(()=> {
        titleRef.current.focus();
    }, [])

    const [input, setInput] = useState({
        id: "",
        title: "",
        description: "",
        date: "",
        time: ""
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

        // alert('New note added successfully!');

        navigate(-1);
    }

    return(
        <>
            <header>
                <h1>Add New Note</h1>
            </header>
            <section>
                <form onSubmit={handleSubmit}>

                    <div className='btns'>
                        <Link to="/" className='link'><input type='submit' value='Back' className='cancel'/></Link>
                        <input type='submit' value='Done' />
                    </div><br/>

                    <input type='text' 
                        ref={titleRef}
                        placeholder='Type your title'
                        value={input.title}
                        onChange={(e) => {
                            setInput(previousState => {
                                return {...previousState, title: e.target.value}
                            })
                        }}
                       
                    /><br/>

                    <textarea 
                        placeholder='Type description of your note' 
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

export default Addnote;