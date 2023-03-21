import React from "react";
import SVG from ".";
import { SVGIconAppStore } from "./SVGIconAppStore";
import { SVGIconFacebook } from "./SVGIconFacebook";
import { SVGIconGooglePlay } from "./SVGIconGooglePlay";
import { SVGIconInstagram } from "./SVGIconInstagram";
import { SVGIconLinkedin } from "./SVGIconLinkedin";
import { SVGIconLogo } from "./SVGIconLogo";
import { SVGIconOrange } from "./SVGIconOrange";
import { SVGIconPhones } from "./SVGIconPhones";
import { SVGIconYoutube } from "./SVGIconYoutube";

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
    AppStore: SVGIconAppStore,
    GooglePlay: SVGIconGooglePlay,
    Phones: SVGIconPhones,
    Linkedin: SVGIconLinkedin,
    Instagram: SVGIconInstagram,
    Facebook: SVGIconFacebook,
    Youtube: SVGIconYoutube,
    Orange: SVGIconOrange,
  }
);
