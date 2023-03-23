import * as React from "react";
import SVGIcon from "./SVGIcon";

export class SVGIconWhatsapp extends React.Component {
  render() {
    const { ...rest } = this.props;
    return (
      <SVGIcon
        className="svg-icon-whatsapp"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        {...rest}
      >
        <path id="Icon_awesome-whatsapp" data-name="Icon awesome-whatsapp" d="M15.3,4.866A8.923,8.923,0,0,0,1.266,15.629L0,20.25l4.729-1.242a8.892,8.892,0,0,0,4.263,1.085H9a9.005,9.005,0,0,0,9-8.92,8.955,8.955,0,0,0-2.7-6.308ZM9,18.591a7.4,7.4,0,0,1-3.777-1.033L4.95,17.4l-2.8.735L2.893,15.4l-.177-.281a7.428,7.428,0,1,1,13.777-3.942A7.5,7.5,0,0,1,9,18.591Zm4.066-5.553c-.221-.112-1.318-.651-1.523-.723s-.354-.113-.5.112-.575.723-.707.876-.261.169-.482.056a6.067,6.067,0,0,1-3.033-2.652c-.229-.394.229-.366.655-1.217a.413.413,0,0,0-.02-.39c-.056-.112-.5-1.209-.687-1.655s-.366-.374-.5-.382-.277-.008-.426-.008a.826.826,0,0,0-.595.277,2.5,2.5,0,0,0-.779,1.86A4.366,4.366,0,0,0,5.368,11.5a9.959,9.959,0,0,0,3.809,3.367,4.361,4.361,0,0,0,2.676.558,2.283,2.283,0,0,0,1.5-1.061,1.864,1.864,0,0,0,.129-1.061C13.432,13.2,13.283,13.146,13.062,13.038Z" transform="translate(0 -2.25)" fill="#333" />
      </SVGIcon>
    );
  }
}
