import * as React from "react";
import SVGIcon from "./SVGIcon";

export class SVGIconSmartphone extends React.Component {
  render() {
    const { ...rest } = this.props;
    return (
      <SVGIcon
        className="svg-icon-smartphone"
        width="72"
        height="72"
        viewBox="0 0 72 72"
        {...rest}
      >
        <defs>
          <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0" stopColor="#fa641e" />
            <stop offset="1" stopColor="#ff881f" />
          </linearGradient>
        </defs>
        <path id="Caminho_9992" data-name="Caminho 9992" d="M0,0H72V72H0Z" fill="none" />
        <path id="Caminho_9993" data-name="Caminho 9993" d="M7,5H37V47H7Z" transform="translate(14 10)" opacity="0.3" fill="url(#linear-gradient)" />
        <path id="Caminho_9994" data-name="Caminho 9994" d="M41,1.03,11,1A6.018,6.018,0,0,0,5,7V61a6.018,6.018,0,0,0,6,6H41a6.018,6.018,0,0,0,6-6V7A5.992,5.992,0,0,0,41,1.03ZM41,55H11V13H41Z" transform="translate(10 2)" fill="url(#linear-gradient)" />
      </SVGIcon>
    );
  }
}
