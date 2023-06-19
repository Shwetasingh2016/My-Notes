import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Button from "./Component/Button";
import AddNote from "./Component/AddNote";
import { useState } from "react";
import Note from "./Component/note";

function App() {
  const [openAddNotes, setOpenAddNotes] = useState(false);
  const [notes, setNotes] = useState([]);
  function handleOpenNote() {
    setOpenAddNotes(!openAddNotes);
  }

  const deleteNotes = (key) => {
    console.log("key--", key);
    const filteredNote = notes.filter((d, i) => i !== key);
    setNotes(filteredNote);
  };

  return (
    <div className="App">
      <Header />
      {openAddNotes && <AddNote onAdd={setNotes} closeNote={setOpenAddNotes} />}
      <div className="notes-wrapper">
        {notes.map((d, i) => {
          return (
            <Note
              title={d.title}
              description={d.description}
              index={i}
              deleteNotes={deleteNotes}
            />
          );
        })}
      </div>
      <div className="add-button">
        <Button
          onClick={handleOpenNote}
          circular
          bgColor={"#f5ba13"}
          text={openAddNotes ? "-" : "+"}
        />
      </div>
      <Footer noOfNotes={notes.length} openAddNotes={openAddNotes} />
    </div>
  );
}

export default App;
