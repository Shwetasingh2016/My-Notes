import React from "react";

export default function Footer({ noOfNotes, openAddNotes }) {
  return (
    <div
      className="footer"
      style={{
        position:
          noOfNotes > 5 && openAddNotes
            ? "relative"
            : noOfNotes > 15
            ? "relative"
            : "absolute",
      }}
    >
      <p>Copyright ⓒ 2023 || Created by Shweta Singh</p>
    </div>
  );
}
