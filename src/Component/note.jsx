import React from "react";
import { MdDelete } from "react-icons/md";

export default function Note({ title, description, deleteNotes, index }) {
  console.log("key---", index);

  return (
    <div className="note" key={index}>
      <h1>{title}</h1>
      <p>{description}</p>
      <MdDelete
        onClick={() => deleteNotes(index)}
        color="red"
        style={{
          position: "absolute",
          right: "20px",
          bottom: "20px",
          fontSize: "20px",
          cursor: "pointer",
        }}
      />
    </div>
  );
}
