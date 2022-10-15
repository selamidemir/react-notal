import React, { useState } from "react";
import { PencilSquare, Trash } from "react-bootstrap-icons";
import { useNotes } from "../contexts/NoteContext";

function Card({ note }) {
  note.date = "11.01.2022";
  note.id = "126555";
  note.description = "note description";
  note.color = "color-1";
  const [description, setDescription] = useState(note.description);
  const [bodyColor, setBodyColor] = useState(note.color);
  const [editMode, setEditMode] = useState(false);
  const { deleteNote, editNote } = useNotes();

  const handleEdit = (e, noteId) => {
    e.preventDefault();
    setEditMode(true);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  const handleDelete = (e, noteId) => {
    e.preventDefault();
    deleteNote(noteId);
  };

  return (
    <div className={`card ${bodyColor}`}>
      <div className="card-title">
        <div>{note.date}</div>
        <div>
          <button
            className="icon-button"
            onClick={(e) => handleEdit(e, note.id)}
          >
            <PencilSquare />
          </button>
          <button
            className="icon-button"
            onClick={(e) => handleDelete(e, note.id)}
          >
            <Trash />
          </button>
        </div>
      </div>
      <div className={`card-body-container border ${bodyColor}`}>
        {!editMode && (
          <div className={`card-body ${bodyColor}`}>{description}</div>
        )}
        {editMode && (
          <textarea
            className={`edit-form-description  ${bodyColor}`}
            value={description}
            onChange={(e) => handleChange(e)}
          ></textarea>
        )}
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
      </div>
    </div>
  );
}

export default Card;
