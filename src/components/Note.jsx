import React from "react";

function Note(props) {
  return (
    //Classes must be added to html elements not custom tags
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button>DELETE</button>
    </div>
  );
}

export default Note;