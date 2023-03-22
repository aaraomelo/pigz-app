import Button from '../Button/index';
import SVG from '../SVG';
import './Header.css';

export default function Header() {
    return (
        <header className='header'>
            <SVG.Icon.Logo />
            <Button className='button-header'>Já sou parceiro</Button>
        </header>
    );
}
