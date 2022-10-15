import React, { useState } from "react";
import { XSquare } from "react-bootstrap-icons";
import { useNotes } from "../contexts/NoteContext";

function AddForm() {
  const [bodyColor, setBodyColor] = useState("color-1");
  const [description, setDescription] = useState("");
  const { setIsFormVisible, addNote } = useNotes();

  const handleChange = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  const handleAddNote = (e, close) => {
    e.preventDefault();
    const note = {
      color: bodyColor,
      description: description,
    };

    addNote(note);

    setBodyColor("color-1");
    setIsFormVisible(false);
  };

  const handleClose = (e) => {
    setDescription("");
    setBodyColor("color-");
    setIsFormVisible(false);
  };

  return (
    <div className="flex-container add-form-container">
      <div className="add-form-card">
        <div className="card">
          <div className="card-title">
            <div>Not Ekle</div>
            <div>
              <button className="icon-button" onClick={(e) => handleClose(e)}>
                <XSquare />
              </button>
            </div>
          </div>
          <div className={`card-body ${bodyColor}`}>
            <textarea
              className={`add-form-description ${bodyColor}`}
              onChange={(e) => handleChange(e)}
              value={description}
            ></textarea>
          </div>
          <div className="card-footer">
            <div
              className="color-picker color-1"
              onClick={() => setBodyColor("color-1")}
            ></div>
            <div
              className="color-picker color-2"
              onClick={() => setBodyColor("color-2")}
            ></div>
            <div
              className="color-picker color-3"
              onClick={() => setBodyColor("color-3")}
            ></div>
            <div
              className="color-picker color-4"
              onClick={() => setBodyColor("color-4")}
            ></div>
            <div
              className="color-picker color-5"
              onClick={() => setBodyColor("color-5")}
            ></div>
            <button
              className="add-form-button"
              onClick={(e) => handleAddNote(e)}
            >
              Kaydet
            </button>
            <button className="add-form-button" 
              onClick={(e) => handleClose(e)}>
              Vazgeç
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddForm;
