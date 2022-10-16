import { useEffect, useState } from "react";
import "./App.css";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { useNotes } from "./contexts/NoteContext";

function App() {
  const { refresh, notes } = useNotes();
  const [durum, setDurum] = useState(refresh);
  useEffect(() => {
    setDurum(refresh);
  }, [refresh, setDurum]);
  return (
    <div>
      <Header />
      <Content refresh={durum} notes={notes} />
      <Footer />
    </div>
  );
}

export default App;
