import React, { useContext } from "react";
import { NoteContext } from "../contexts/NoteContext";
import Card from "./Card";

function Content({refresh, notes1}) { 
  const {notes} = useContext(NoteContext);
  return (
    <div className="flex-container content-height">
      <div className="content" data-refresh={refresh}>
        {notes.map((note, index) => (
          <Card note={note} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Content;
