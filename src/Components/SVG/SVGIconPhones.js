import * as React from "react";
import SVGIcon from "./SVGIcon";

export class SVGIconPhones extends React.Component {
  render() {
    const { ...rest } = this.props;
    return (
      <SVGIcon
        className="svg-icon-phones"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        {...rest}
      >
        <path id="icone-fale-conosco" d="M9,9.75a1.5,1.5,0,0,0-1.5-1.5H6.75a3,3,0,0,0-3,3V13.5a3,3,0,0,0,3,3H7.5A1.5,1.5,0,0,0,9,15Zm8.25,6.75a3,3,0,0,0,3-3V11.25a3,3,0,0,0-3-3H16.5A1.5,1.5,0,0,0,15,9.75V15a1.5,1.5,0,0,0,1.5,1.5ZM12,0A12.228,12.228,0,0,0,0,12v.75a.75.75,0,0,0,.75.75H1.5a.75.75,0,0,0,.75-.75V12a9.75,9.75,0,0,1,19.5,0h-.006c0,.114.006,7.768.006,7.768a1.982,1.982,0,0,1-1.982,1.982H15a2.25,2.25,0,0,0-2.25-2.25h-1.5a2.25,2.25,0,0,0,0,4.5h8.518A4.232,4.232,0,0,0,24,19.768V12A12.228,12.228,0,0,0,12,0Z" fill="#676767" />
      </SVGIcon>
    );
  }
}
