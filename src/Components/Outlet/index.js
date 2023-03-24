import useFlow from '../Hooks/useFlow';
import useForm from '../Hooks/useForm';
import IMG from '../IMG';
import SVG from '../SVG';
import './Outlet.css';

export default function Outlet() {
  const Form = useForm();
  const Flow = useFlow();
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
        <p>
          Temos uma equipe ansiosa para cadastrar seus produtos no Pigz Marketplace e deixar sua loja prontinha para iniciar as vendas.
        </p>
        <Flow.Form>
          <Form />
          <Form.Store.Address />
          <Form.Store.Profile />
        </Flow.Form>
      </div>
      <footer className='outlet-footer'>
        <SVG.Icon.Pigz />
      </footer>
    </div>
  );
}
