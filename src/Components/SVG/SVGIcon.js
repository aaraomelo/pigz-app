import React from "react";
import SVG from ".";
import { SVGIconLogo } from "./SVGIconLogo";

export default Object.assign(
  ({ children, ...rest }) => {
    return (
      <SVG {...rest}>
        {children}
      </SVG>
    );
  },
  {
    Logo: SVGIconLogo,
  }
);
