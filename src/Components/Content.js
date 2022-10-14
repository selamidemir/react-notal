import React from "react";
import Card from "./Card";

function Content() {
  return (
    <div className="flex-container content-height">
      <div className="content">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Content;
