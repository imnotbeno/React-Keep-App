import React from "react";
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';

function Note(props) {
  return (
    //Classes must be added to html elements not custom tags
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        className="delete-button"
        onClick={() => {
          props.deleteNote(props.id);
        }}
      >
        <DeleteTwoToneIcon />
      </button>
    </div>
  );
}

export default Note;
