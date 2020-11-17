import React, { useState } from "react";

function AddNote() {
  const [isClicked, setClick] = useState(false);
  const [inputText, setInputText] = useState({
    title: "",
    content: "",
  });

  function handleClick() {
    //To dela
    console.log("I've been clicked");
    setClick(true);
  }

  //Function to handle change of input text
  function handleChange(event) {
    const { value, name } = event.target;

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
