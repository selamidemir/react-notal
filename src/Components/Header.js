import React from "react";
import { JournalCheck, PlusSquare } from "react-bootstrap-icons";

function Header() {
  return (
    <div className="flex-container header-container">
      <div className="header">
        <h2>
          <JournalCheck /> NotAl
        </h2>
        <span>
          <a href="/#" title="Not Ekle">
            <PlusSquare />
          </a>
        </span>
      </div>
    </div>
  );
}

export default Header;
