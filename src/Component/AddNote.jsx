import React, { useState } from "react";
import Button from "./Button";

export default function AddNote({ onAdd, closeNote }) {
  const [note, setNote] = useState({
    title: "",
    description: "",
  });
  console.log("note-", note);
  const handleChange = (e) => {
    console.log("event-", e.target.value);
    console.log("name-", e.target.name);
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    onAdd((prev) => {
      return [...prev, note];
    });
    closeNote(false);
  };

  return (
    <div className="add-note">
      <input
        type="text"
        placeholder="Title"
        onChange={handleChange}
        name="title"
        value={note.title}
      />
      <textarea
        name="description"
        placeholder="Take a note..."
        rows="3"
        onChange={handleChange}
        value={note.description}
      ></textarea>
      <Button
        text={"Add"}
        bgColor={"green"}
        disable={note.title === ""}
        onClick={handleClick}
      />
    </div>
  );
}
