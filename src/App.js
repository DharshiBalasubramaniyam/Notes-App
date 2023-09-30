import Noteslist from "./components/Noteslist";
import Addnote from "./components/Addnote";
import {Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';


function App() {

  const local_storage_key = 'notes';

  let [list, setList] = useState([]);

  useEffect(()=> {
    const storageNotes = JSON.parse(localStorage.getItem('notes'));
    if(storageNotes) setList(storageNotes);
    console.log('inside use effect')
  }, []);

  useEffect(()=> {
    localStorage.setItem('notes', JSON.stringify(list));
  }, [list]);

  function addNote(note) {
      setList([...list, note]);
  }

  return (
    <>
        <Routes>
          <Route path="/" element={<Noteslist list={list}  />} />
          <Route path="/newnote" element={<Addnote addNote={addNote} />}  />
        </Routes>
    </>
  );
}

export default App;
