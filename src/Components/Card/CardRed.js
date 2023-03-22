import React from "react";
import SVG from "../SVG";

export default function CardRed({ icon, title, body }) {
  const Icon = SVG.Icon[icon];
  return (
    <div className="card card-red">
      <div className="card-title card-red-title">
        <Icon />
        <h2>{title}</h2>
      </div>
      <div className="card-body card-red-body">
        {body}
      </div>
    </div>
  );
}
