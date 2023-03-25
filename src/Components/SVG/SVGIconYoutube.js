import * as React from "react";
import SVGIcon from "./SVGIcon";

export class SVGIconYoutube extends React.Component {
  render() {
    const { ...rest } = this.props;
    return (
      <SVGIcon
        className="svg-icon svg-icon-youtube"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        {...rest}
      >
        <path id="youtube-with-circle" d="M14.987,12.683l-2.924-1.365a.3.3,0,0,0-.465.3v2.57a.3.3,0,0,0,.465.3l2.923-1.365C15.242,13,15.242,12.8,14.987,12.683ZM12.9.4A12.5,12.5,0,1,0,25.4,12.9,12.5,12.5,0,0,0,12.9.4Zm0,17.578c-6.4,0-6.51-.577-6.51-5.078S6.5,7.822,12.9,7.822s6.51.577,6.51,5.078S19.3,17.978,12.9,17.978Z" transform="translate(-0.4 -0.4)" fill="#676767" />
      </SVGIcon>
    );
  }
}
