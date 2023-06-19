import React from "react";

export default function Button({ text, bgColor, circular, onClick , disable }) {
  return (
    <button
      onClick={onClick}
      disabled = {disable}
      style={{
        background: bgColor,
        borderRadius: circular ? "50%" : "3px",
      }}
    >
      {text}
    </button>
  );
}
