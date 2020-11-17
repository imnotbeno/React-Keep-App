import React, { useState } from "react";

function InputNote(props) {
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

  return (
    <form>
      <input
        name="title"
        type="text"
        onChange={handleChange}
        placeholder="Title"
        value={inputText.title}
      />
      <input
        name="content"
        type="text"
        onChange={handleChange}
        placeholder="Write a note..."
        rows="3"
        value={inputText.content}
      />
      <button
        onClick={(event) => {
          props.addClick(inputText, event);
          setInputText({ title: "", content: "" });
        }}
      >
        Add
      </button>
    </form>
  );
}

export default InputNote;
