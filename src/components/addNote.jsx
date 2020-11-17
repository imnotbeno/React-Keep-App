import React, { useState } from "react";

function AddNote() {
  //For add button state handling  
  const [isClicked, setClick] = useState(false);
  
  //For input state handling
  const [inputText, setInputText] = useState({
    title: "",
    content: "",
  });

  //Function for handling the button states
  function handleClick() {
    //To dela
    console.log("I've been clicked");
    setClick(true);
  }

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
        {...console.log(inputText.title)}
      />
      <input
        name="content"
        type="text"
        onChange={handleChange}
        placeholder="Write a note..."
        rows="3"
        value={inputText.content}
        {...console.log(inputText.content)}
      />
      <button type="submit" onClick={handleClick}>
        Add
      </button>
    </form>
  );
}

export default AddNote;
