import React from "react";
import CardGroupOrange from "./CardGroupOrange";
import CardGroupRed from "./CardGroupRed";
import CardGroupYellow from "./CardGroupYellow";

export default Object.assign(
  ({ children, className = '' }) => {
    return (
      <div className={`card-group ${className}`}>
        {children}
      </div>
    );
  },
  {
    Red: CardGroupRed,
    Yellow: CardGroupYellow,
    Orange: CardGroupOrange,
  }
);
