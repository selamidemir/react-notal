import React, { useState, useEffect } from "react";
import { useNotes } from "../contexts/NoteContext";
import Card from "./Card";

function Content() {
  const { notes, refresh } = useNotes();
  const [refreshPage, setRefreshPage] = useState(false);
  useEffect(() => {
    // Not silindiğinde notların yanlış
    // Yenilenmesi nedeni ile 
    // Notları yenilemeye zorluyoruz.
    setRefreshPage(true);
    setTimeout(()=> setRefreshPage(false), 1);
  }, [refresh, setRefreshPage]);

  return (
    <div className="flex-container content-height">
      <div className="content">
        {!refreshPage &&
          notes.map((note, index) => <Card note={note} key={index} />)}
      </div>
    </div>
  );
}

export default Content;
