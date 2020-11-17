import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import AddNote from "./addNote";

function App() {
  return (
    <div>
      <Header />
      <AddNote />
      <Note title="note title" content="note content" />
      <Footer />
    </div>
  );
}

export default App;
