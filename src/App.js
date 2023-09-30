import Noteslist from "./components/Noteslist";
import Addnote from "./components/Addnote";
import {Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Noteslist/>}  />
          <Route path="/newnote" element={<Addnote/>}  />
        </Routes>
    </>
  );
}

export default App;
