import Noteslist from "./components/Noteslist";
import Addnote from "./components/Addnote";
import DeleteNote from "./components/DeleteNote";
import {Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';


function App() {

  const local_storage_key = 'notes';

  let [list, setList] = useState([]);

  useEffect(()=> {
    const storageNotes = JSON.parse(localStorage.getItem(local_storage_key));
    if(storageNotes) setList(storageNotes);
  }, []);

  useEffect(()=> {
    localStorage.setItem(local_storage_key, JSON.stringify(list));
  }, [list]);

  function addNote(note) {
      const id = uuidv4();
      note.id = id;
      setList([...list, note]);
  }

  function removeNote(id) {
    const removedList = list.filter((note) => {
      return note.id!==id;
    })
    setList(removedList);
    alert('Note deleted sucessfully');
  }

  return (
    <>
        <Routes>
          <Route path="/" element={<Noteslist list={list}  removeNote={removeNote}/>} />
          <Route path="/deletenote/:id" element={<DeleteNote removeNote={removeNote}/>} />
          <Route path="/newnote" element={<Addnote addNote={addNote} />}  />
        </Routes>
    </>
  );
}

export default App;
