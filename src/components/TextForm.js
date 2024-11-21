import React, { useState } from "react";

export default function TextForm(props) {
  const [text, Settext] = useState("enter text here");

  // Properly define the event handlers
  const handleOnChange = (event) => {
    Settext(event.target.value); // Update the state with the new value
  };

  const handleOnUpperClick = () => {
    Settext(text.toUpperCase()); // Convert the text to uppercase
    props.ShowAlert("success","converted to Upper Case");
  };
  const handleOnLowerClick = () => {
    Settext(text.toLowerCase()); // Convert the text to uppercase
    props.ShowAlert("success","converted to Lower Case");
  };
  const handleOnClearTextClick = () => {
    Settext(""); // Convert the text to uppercase
    props.ShowAlert("success","Cleared text");
  };

  return (
    <>
      <div
        className="container my-5"
        style={{
          backgroundColor: props.mode === "dark" ? "grey" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="my-box"
            value={text}
            onChange={handleOnChange} // Attach the event handler
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleOnUpperClick}>
          Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleOnLowerClick}>
          Lowercase
        </button>

        <button
          className="btn btn-primary mx-3"
          onClick={handleOnClearTextClick}
        >
          Clear Text
        </button>
      </div>

      <div
        className="container my-5"
        style={{
          backgroundColor: props.mode === "dark" ? "grey" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Summary</h2>
        <p>
          Words-
          {
            text
              .trim()
              .split(/\s+/)
              .filter((word) => word.length > 0).length
          }{" "}
          and Charectrs-{text.replace(/\s+/g, "").length}
        </p>
      </div>
    </>
  );
}
