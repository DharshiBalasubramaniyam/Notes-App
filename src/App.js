import Noteslist from "./components/Noteslist";
import Addnote from "./components/Addnote";
import DeleteNote from "./components/DeleteNote";
import UpdateNote from "./components/UpdateNote";
import {Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Footer from './components/Footer';
import Viewnote from './components/Viewnote';


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
      note.date = new Date().toDateString();
      note.time = new Date().toLocaleTimeString();
      setList([...list, note]);
  }

  function removeNote(id) {
    const removedList = list.filter((note) => {
      return note.id!==id;
    })
    setList(removedList);
  }

  function editNote(editednote) {
    editednote.date = new Date().toDateString();
    editednote.time = new Date().toLocaleTimeString();
    const removedList = list.filter((note) => {
      return note.id!==editednote.id;
    })
    setList([...removedList, editednote]);
  }

  return (
    <>
        <Routes>
          <Route path="/" element={<Noteslist list={list}/>} />
          <Route path="/deletenote/:id" element={<DeleteNote removeNote={removeNote}/>} />
          <Route path="/updatenote/:id" element={<UpdateNote editNote={editNote} />} />
          <Route path="/newnote" element={<Addnote addNote={addNote} />}  />
          <Route path="/viewnote/:id" element={<Viewnote list={list}/>}  />
        </Routes>
        <Footer/>
    </>
  );
}

export default App;
