import { createContext, useContext, useState } from "react";

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  let savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
  if (savedNotes.length === 0) {
    savedNotes = [];
    localStorage.setItem("notes", JSON.stringify(savedNotes));
  }

  const [notes, setNotes] = useState(savedNotes);
  const [refresh, setRefresh] = useState(0);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const addNote = (note) => {
    if (!note.hasOwnProperty("id")) return;
    saveNotes([...notes, note]);
  };

  const saveNotes = (newNotes) => {
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
    setTimeout(setRefresh(Math.random()), 3500)
  };

  const deleteNote = (noteId) => {
    if(!noteId) return;
    const newNotes = notes.filter(note => note.id !== noteId);
    saveNotes(newNotes);
  };

  const updateNote = (note) => {
    if (!note.hasOwnProperty("id")) return;
    const newNotes = notes.map((item) => (item.id === note.id ? note : item));
    saveNotes(newNotes);
  };

  const updateNoteColor = (noteId, color) => {
    if(!color) return;
    const newNotes = notes.map((item) => {
      if(item.id === noteId) item.color = color;
      return item;
    });
    saveNotes(newNotes);
  };

  const values = {
    notes,
    setNotes,
    addNote,
    deleteNote,
    updateNote,
    isFormVisible,
    setIsFormVisible,
    updateNoteColor,
    refresh
  };

  return <NoteContext.Provider value={values}>{children}</NoteContext.Provider>;
};

export const useNotes = () => useContext(NoteContext);
