import * as React from "react";
import SVGIcon from "./SVGIcon";

export class SVGIconStorefront extends React.Component {
  render() {
    const { ...rest } = this.props;
    return (
      <SVGIcon
        className="svg-icon-storefront"
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
        <g id="Grupo_3542" data-name="Grupo 3542">
          <rect id="Retângulo_5434" data-name="Retângulo 5434" width="72" height="72" fill="none" />
        </g>
        <g id="Grupo_3544" data-name="Grupo 3544" transform="translate(6.016 9)">
          <g id="Grupo_3543" data-name="Grupo 3543">
            <path id="Caminho_9987" data-name="Caminho 9987" d="M11.32,19.58,13.06,5H7.15L4.12,18.08a4.068,4.068,0,0,0,.75,3.51A3.52,3.52,0,0,0,7.69,23,3.772,3.772,0,0,0,11.32,19.58Z" transform="translate(1.984 1)" opacity="0.3" fill="url(#linear-gradient)" />
            <path id="Caminho_9988" data-name="Caminho 9988" d="M12.172,23a3.855,3.855,0,0,0,3.87-3.93V5h-5.88L8.512,18.56a4.033,4.033,0,0,0,.99,3.21A3.561,3.561,0,0,0,12.172,23Z" transform="translate(10.942 1)" opacity="0.3" fill="url(#linear-gradient)" />
            <path id="Caminho_9989" data-name="Caminho 9989" d="M16.66,23a3.73,3.73,0,0,0,2.88-1.23,4.262,4.262,0,0,0,.99-3.21L18.88,5H13V19.07A3.816,3.816,0,0,0,16.66,23Z" transform="translate(19.984 1)" opacity="0.3" fill="url(#linear-gradient)" />
            <path id="Caminho_9990" data-name="Caminho 9990" d="M22.77,4.99l-5.79.03L18.72,19.6a3.772,3.772,0,0,0,3.63,3.42,3.453,3.453,0,0,0,2.79-1.41,4.089,4.089,0,0,0,.75-3.51Z" transform="translate(27.944 0.98)" opacity="0.3" fill="url(#linear-gradient)" />
            <path id="Caminho_9991" data-name="Caminho 9991" d="M61.689,20.67,58.539,7.56A5.893,5.893,0,0,0,52.809,3H11.139a5.891,5.891,0,0,0-5.7,4.56L2.289,20.67a10.125,10.125,0,0,0,1.86,8.64,11.5,11.5,0,0,0,.84.87V51a6.018,6.018,0,0,0,6,6h42a6.018,6.018,0,0,0,6-6V30.18a11.1,11.1,0,0,0,.84-.84A10.091,10.091,0,0,0,61.689,20.67ZM34.989,9h5.88l1.62,13.56a4.033,4.033,0,0,1-.99,3.21A3.578,3.578,0,0,1,38.649,27a3.816,3.816,0,0,1-3.66-3.93ZM21.459,22.56,23.109,9h5.88V23.07A3.855,3.855,0,0,1,25.119,27a3.61,3.61,0,0,1-2.67-1.23A4.262,4.262,0,0,1,21.459,22.56Zm-12.6,3.03a4.089,4.089,0,0,1-.75-3.51L11.139,9h5.91l-1.74,14.58A3.772,3.772,0,0,1,11.679,27,3.52,3.52,0,0,1,8.859,25.59ZM52.989,51h-42V32.91a5.431,5.431,0,0,0,.69.09,9.387,9.387,0,0,0,6.72-2.85A9.648,9.648,0,0,0,25.329,33a9.511,9.511,0,0,0,6.69-2.79A9.833,9.833,0,0,0,38.889,33a9.526,9.526,0,0,0,6.72-2.85A9.387,9.387,0,0,0,52.329,33a5.431,5.431,0,0,0,.69-.09V51Zm2.13-25.41A3.52,3.52,0,0,1,52.3,27a3.75,3.75,0,0,1-3.63-3.42L46.929,9l5.79-.03,3.15,13.11A4.047,4.047,0,0,1,55.119,25.59Z" transform="translate(-2.005 -3)" fill="url(#linear-gradient)" />
          </g>
        </g>
      </SVGIcon>
    );
  }
}
