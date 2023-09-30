import Noteslist from "./components/Noteslist";
import Addnote from "./components/Addnote";
import {Routes, Route } from 'react-router-dom';
import { useState } from 'react';


function App() {

  let [list, setList] = useState([]);

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
