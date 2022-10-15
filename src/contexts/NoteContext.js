import { createContext, useContext, useState } from "react";

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState(
    localStorage.getItem("notes") ? localStorage.getItem("notes") : []
  );

  const [isFormVisible, setIsFormVisible] = useState(false);
  const addNote = (data) => {
    console.log("add note");
  };

  const deleteNote = (noteId) => {
    console.log('delete note')
  };

  const editNote = (noteId) => {};

  const changeColor = (color) => {};

  const values = {
    notes,
    setNotes,
    addNote,
    deleteNote,
    editNote,
    isFormVisible,
    setIsFormVisible,
    changeColor,
  };

  return <NoteContext.Provider value={values}>{children}</NoteContext.Provider>;
};

export const useNotes = () => useContext(NoteContext);
