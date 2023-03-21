import SVG from '../SVG';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <SVG.Icon.Logo fill="#676767" scale={1.25} />
            <SVG.Icon.AppStore />
            <SVG.Icon.GooglePlay />
            <SVG.Icon.Phones />
            <SVG.Icon.Linkedin />
            <SVG.Icon.Instagram />
            <SVG.Icon.Facebook />
            <SVG.Icon.Youtube />
            <SVG.Icon.Orange />
        </footer>
    );
}
