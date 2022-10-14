import React from "react";
import { PencilSquare, Trash } from "react-bootstrap-icons";

function Card() {
  const date = new Date();
  return (
    <div className="card">
      <div className="card-title">
        <div>{date.toLocaleDateString()}</div>
        <div>
          <PencilSquare />
          <Trash />
        </div>
      </div>
      <div className="card-body">içerik</div>
      <div className="card-footer">
        <div className="color-picker color-1"></div>
        <div className="color-picker color-2"></div>
        <div className="color-picker color-3"></div>
        <div className="color-picker color-4"></div>
        <div className="color-picker color-5"></div>
      </div>
    </div>
  );
}

export default Card;
