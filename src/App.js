import Noteslist from "./components/Noteslist";
import Addnote from "./components/Addnote";
import {Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';


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
      const id = list.length+1;
      note.id = id;
      setList([...list, note]);
  }

  function removeNote(id) {
    console.log(id);
    const removedList = list.filter((note) => {
      return note.id!==id;
    })
    setList(removedList);
    console.log(removedList);
  }

  return (
    <>
        <Routes>
          <Route path="/" element={<Noteslist list={list}  removeNote={removeNote}/>} />
          <Route path="/newnote" element={<Addnote addNote={addNote} />}  />
        </Routes>
    </>
  );
}

export default App;
