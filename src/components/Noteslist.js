import './Styles.css';
import { Link } from 'react-router-dom';
import Notecard from './Notecard';
import searchImage from '../images/search.png'
import { useState } from 'react';

function Noteslist(props) {

    const [search, setSearch] = useState("");

    const notesList = props.list.filter((note) => {
                                    return (search === "" ? note : note.title.toLowerCase().includes(search.toLowerCase()));
                                })

    return(
        <>
            <header>
                <h1>Notes app</h1>
                <div className='search'>
                        <input 
                            type='text' 
                            placeholder='Enter title to search'
                            name='search'
                            onChange={(e)=> {
                                setSearch(e.target.value)
                            }}
                        /> 
                        <img src={searchImage} alt='search'/>
                </div>
                    
                    <Link to="/newnote" className='btn'>New note</Link> 
            </header>
            <section id='list'>
                <h1>My Notes</h1>

                <div className='notes-container'>
                {
                    notesList.length === 0 ? <><p className='empty'>No notes found!</p></>:
                    notesList.map((note) => {
                        return (
                            <Notecard note={note} key={note.id}/>
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