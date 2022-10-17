import React, { useState } from "react";
import { PencilSquare, Save, Trash } from "react-bootstrap-icons";
import { useNotes } from "../contexts/NoteContext";
import convert from "react-from-dom";
import { marked } from "marked";

function Card({ note }) {
  const [description, setDescription] = useState(note.description);
  const [bodyColor, setBodyColor] = useState(note.color);
  const [editMode, setEditMode] = useState(false);
  const { deleteNote, updateNote, updateNoteColor } = useNotes();
  const htmlString = "<div>" + marked.parse(description) + "</div>";
  const htmlDescription = convert(htmlString);

  const handleEdit = (e) => {
    e.preventDefault();
    setEditMode(true);
  };

  const handleSave = (e) => {
    const editedNote = {
      id: note.id,
      color: bodyColor,
      description: description,
    };

    updateNote(editedNote);
    setEditMode(false);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    deleteNote(note.id);
  };

  const handleColorChange = (color) => {
    setBodyColor(color);
    updateNoteColor(note.id, color);
  };

  return (
    <div className={`card ${bodyColor}`}>
      <div className="card-title">
        <div>{note.date}</div>
        <div>
          {!editMode && (
            <button className="icon-button" onClick={(e) => handleEdit(e)}>
              <PencilSquare />
            </button>
          )}
          {editMode && (
            <button className="icon-button" onClick={(e) => handleSave(e)}>
              <Save />
            </button>
          )}
          <button
            className="icon-button"
            title={note.id}
            onClick={(e) => {
              if (window.confirm("Bu notu silmek istediğinizden emin misiniz?"))
                handleDelete(e);
            }}
          >
            <Trash />
          </button>
        </div>
      </div>
      <div className={`card-body-container ${bodyColor}`}>
        {editMode && (
          <textarea
            disabled={!editMode}
            className={`edit-form-description  ${bodyColor}`}
            value={description}
            onChange={(e) => handleChange(e)}
          ></textarea>
        )}
        {!editMode && (
          <div
            disabled={!editMode}
            className={`edit-form-description  ${bodyColor}`}
          >{htmlDescription}</div>
        )}
      </div>
      <div className="card-footer">
        <div
          className="color-picker color-1"
          onClick={() => handleColorChange("color-1")}
        ></div>
        <div
          className="color-picker color-2"
          onClick={() => handleColorChange("color-2")}
        ></div>
        <div
          className="color-picker color-3"
          onClick={() => handleColorChange("color-3")}
        ></div>
        <div
          className="color-picker color-4"
          onClick={() => handleColorChange("color-4")}
        ></div>
        <div
          className="color-picker color-5"
          onClick={() => handleColorChange("color-5")}
        ></div>
      </div>
    </div>
  );
}

export default Card;
