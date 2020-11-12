import React from "react";

function Note() {
  return (
    //Classes must be added to html elements not custom tags
    <div className="note">
      <h1>Title</h1>
      <p>Content</p>
    </div>
  );
}

export default Note;


// className="header h1"
// className="note p"