import React from "react";

function AddNote() {
  return (
    <form>
      <input name="title" type="text" placeholder="Title"/>
      <input name="content" type="text" placeholder="Write a note..."/>
      <button type="submit">Add</button>
    </form>
  );
}

export default AddNote;
