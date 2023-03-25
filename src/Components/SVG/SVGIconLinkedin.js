import * as React from "react";
import SVGIcon from "./SVGIcon";

export class SVGIconLinkedin extends React.Component {
  render() {
    const { ...rest } = this.props;
    return (
      <SVGIcon
        className="svg-icon svg-icon-linkedin"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        {...rest}
      >
        <path id="linkedin-with-circle" d="M12.9.4A12.5,12.5,0,1,0,25.4,12.9,12.5,12.5,0,0,0,12.9.4ZM9.84,18.081H7.309V9.935H9.84ZM8.559,8.935A1.267,1.267,0,1,1,8.591,6.4a1.268,1.268,0,1,1-.033,2.531Zm10.526,9.146H16.554V13.567c0-1.051-.367-1.764-1.283-1.764a1.39,1.39,0,0,0-1.3.948,1.792,1.792,0,0,0-.085.633v4.7H11.356V12.533c0-1.017-.033-1.867-.066-2.6h2.2l.116,1.132h.051A2.93,2.93,0,0,1,16.171,9.75c1.665,0,2.914,1.116,2.914,3.514Z" transform="translate(-0.4 -0.4)" fill="#676767" />
      </SVGIcon>
    );
  }
}
