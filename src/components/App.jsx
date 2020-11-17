import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
//import notes from "../notes";
import InputNote from "./addNote";

function App() {
  //For add button state handling
  const [notes, setNotes] = useState([]);

  //Function for handling the button states
  function addNote(inputText,event) {
    event.preventDefault();
    setNotes((prevNotes) => {
      return [...prevNotes, inputText];
    });
  }

  return (
    <div>
      <Header />
      <InputNote addClick={addNote} />
      {notes.map((note, index) => (
        <Note 
          key={index}
          title={note.title}
          content={note.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
