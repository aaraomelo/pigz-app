import React from "react";
import CardGroupRed from "./CardGroupRed";

export default Object.assign(
  ({ children, ...rest }) => {
    return (
      <div className='card-group'>
        {children}
      </div>
    );
  },
  {
    Red: CardGroupRed
  }
);
