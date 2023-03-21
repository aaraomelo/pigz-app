import React from "react";
import SVGIcon from "./SVGIcon";

export default Object.assign(({ children, ...rest }) => {
  return (
    <svg
      className={`svg`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...rest}
    >
      {children}
    </svg>
  );
},
  {
    Icon: SVGIcon,
  }
);
