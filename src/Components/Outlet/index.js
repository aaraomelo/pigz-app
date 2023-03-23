import IMG from '../IMG';
import SVG from '../SVG';
import './Outlet.css';

export default function Outlet() {
  return (
    <div className='outlet'>
      <header className='outlet-header'>
        <IMG
          className='outlet-header-image'
          src={'burguer.png'}
        />
        <h1 className='outlet-header-title'>
          Pigz: tudo que<br />você precisa<br />pra vender<br />ainda mais!
        </h1>
      </header>
      <div className='outlet-body'>
        Temos uma equipe ansiosa para cadastrar seus produtos no Pigz Marketplace e deixar sua loja prontinha para iniciar as vendas.
      </div>
      <footer className='outlet-footer'>
        <SVG.Icon.Pigz />
      </footer>
    </div>
  );
}
