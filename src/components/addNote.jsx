import React, { useState } from "react";
import AddTwoToneIcon from "@material-ui/icons/AddTwoTone";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function InputNote(props) {
  //States for expansion handling
  const [isExpanded, setExpanded] = useState(false);

  //For input state handling
  const [inputText, setInputText] = useState({
    title: "",
    content: "",
  });

  //Function to handle change of input text and states
  function handleChange(event) {
    //Grabbing the name of input that was changed and its value
    //via the event that triggered it
    const { value, name } = event.target;

    //setting up the new input value by changing the elements of
    //the previous note object with elements from the new one
    setInputText((prevValue) => {
      if (name === "title") {
        return {
          title: value,
          content: prevValue.content,
        };
      } else if (name === "content") {
        return {
          title: prevValue.title,
          content: value,
        };
      }
    });
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <form className="create-note">
      {isExpanded ? (
        <input
          name="title"
          type="text"
          onChange={handleChange}
          placeholder="Title"
          value={inputText.title}
        />
      ) : null}

      <textarea
        name="content"
        type="text"
        onClick={expand}
        onChange={handleChange}
        placeholder="Write a note..."
        rows={isExpanded ? 3 : 1}
        value={inputText.content}
      />
      <Zoom in={isExpanded}>
        <Fab
          onClick={(event) => {
            props.addClick(inputText, event);
            setInputText({ title: "", content: "" });
          }}
        >
          <AddTwoToneIcon />
        </Fab>
      </Zoom>
    </form>
  );
}

export default InputNote;
