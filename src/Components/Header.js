import React from "react";
import { JournalCheck, PlusSquare } from "react-bootstrap-icons";
import { useNotes } from "../contexts/NoteContext";
import AddForm from "./AddForm";

function Header() {
  const { isFormVisible, setIsFormVisible } = useNotes();

  return (
    <>
      <div className="flex-container header-container">
        <div className="header">
          <h2>
            <JournalCheck /> NotAl
          </h2>
          <button
            className="icon-button add-note-button"
            onClick={() => setIsFormVisible(true)}
          >
            <PlusSquare />
          </button>
        </div>
      </div>
      {isFormVisible && <AddForm />}
    </>
  );
}

export default Header;
