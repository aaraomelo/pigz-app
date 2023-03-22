import SVG from '../SVG';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="logo">
        <SVG.Icon.Logo fill="#676767" scale={1.25} />
        <p>Tudo que você precisa.</p>
      </div>
      <div className="store">
        <h2>Baixe o APP</h2>
        <SVG.Icon.AppStore />
        <SVG.Icon.GooglePlay />
      </div>
      <div className="about">
        <h2>Pigz</h2>
        <ul>
          <li>Sobre o Pigz</li>
          <li>Portal do Parceiro</li>
          <li>Quero ser um Pigz Partner</li>
        </ul>
      </div>
      <div className="contact">
        <div className="contact-title">
          <SVG.Icon.Phones />
          <h2>Fale conosco</h2>
        </div>
        <ul>
          <li>falecom@pigz.com.br</li>
          <li>(95) 3224-2603</li>
        </ul>
      </div>
      <div className="social">
        <h2>Pigz nas redes</h2>
        <SVG.Icon.Linkedin />
        <SVG.Icon.Instagram />
        <SVG.Icon.Facebook />
        <SVG.Icon.Youtube />
      </div>
      <div className="help">
        <ul>
          <li>Nossos termos</li>
          <li>Privacidade</li>
          <li>Ajuda</li>
        </ul>
      </div>
      <div className="orange">
        <p>© Copyright 2021 • Pigz • Todos os direitos reservados Orange Labs Tecnologia LTDA. CNPJ 34.895.008/0001-85</p>
        <div>
          <SVG.Icon.Orange />
        </div>
      </div>
    </footer>
  );
}
