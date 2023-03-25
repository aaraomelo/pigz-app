import * as React from "react";
import SVGIcon from "./SVGIcon";

export class SVGIconInstagram extends React.Component {
  render() {
    const { ...rest } = this.props;
    return (
      <SVGIcon
        className="svg-icon svg-icon-instagram"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        {...rest}
      >
        <path id="instagram-with-circle" d="M17.975,9.06A2.156,2.156,0,0,0,16.74,7.825,3.6,3.6,0,0,0,15.531,7.6c-.687-.031-.892-.038-2.631-.038s-1.944.007-2.631.038a3.6,3.6,0,0,0-1.209.224A2.156,2.156,0,0,0,7.825,9.06,3.6,3.6,0,0,0,7.6,10.269c-.031.687-.038.893-.038,2.631s.007,1.944.038,2.631a3.6,3.6,0,0,0,.224,1.209A2.156,2.156,0,0,0,9.06,17.975a3.6,3.6,0,0,0,1.209.224c.686.031.892.038,2.631.038s1.944-.007,2.631-.038a3.6,3.6,0,0,0,1.209-.224,2.156,2.156,0,0,0,1.236-1.236,3.6,3.6,0,0,0,.224-1.209c.031-.687.038-.892.038-2.631s-.007-1.944-.038-2.631a3.6,3.6,0,0,0-.224-1.209ZM12.9,16.243A3.343,3.343,0,1,1,16.243,12.9,3.343,3.343,0,0,1,12.9,16.243Zm3.475-6.037a.781.781,0,1,1,.781-.781A.781.781,0,0,1,16.375,10.206ZM15.07,12.9a2.17,2.17,0,1,1-2.17-2.17,2.17,2.17,0,0,1,2.17,2.17ZM12.9.4A12.5,12.5,0,1,0,25.4,12.9,12.5,12.5,0,0,0,12.9.4Zm6.471,15.184a4.779,4.779,0,0,1-.3,1.58,3.328,3.328,0,0,1-1.9,1.9,4.779,4.779,0,0,1-1.58.3c-.694.032-.916.039-2.684.039s-1.99-.007-2.684-.039a4.779,4.779,0,0,1-1.58-.3,3.328,3.328,0,0,1-1.9-1.9,4.779,4.779,0,0,1-.3-1.58C6.4,14.89,6.39,14.668,6.39,12.9s.007-1.99.039-2.684a4.779,4.779,0,0,1,.3-1.58,3.328,3.328,0,0,1,1.9-1.9,4.779,4.779,0,0,1,1.58-.3c.694-.032.916-.039,2.684-.039s1.99.007,2.684.039a4.779,4.779,0,0,1,1.58.3,3.328,3.328,0,0,1,1.9,1.9,4.779,4.779,0,0,1,.3,1.58c.032.694.039.916.039,2.684s-.007,1.99-.039,2.684Z" transform="translate(-0.4 -0.4)" fill="#676767" />
      </SVGIcon>
    );
  }
}
