import './App.css';
import Card from './Components/Card';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Info from './Components/Info';

const disclaimers = [
  {
    title: <>Tudo que você<br />precisa por apenas<br />R$199/mês</>,
    body: 'Tenha todas as funcionalidades Pigz sem taxa de adesão, sem comissão por cada venda, sem letrinhas miúdas.',
  },
  {
    title: <>E mais: suporte<br />que realmente<br />funciona!</>,
    body: 'Respostas automáticas e robôs? Aqui não. Nossa equipe está sempre disponível pra ajudar você e seus clientes.',
  },
];

export default function App() {
  return (
    <div className="App">
      <Header />
      <Card.Group.Red />
      <Info.Disclaimer {...disclaimers[0]} />
      <Card.Group.Orange />
      <Info.Disclaimer {...disclaimers[1]} />
      <Card.Group.Yellow />
      <Info.Contact />
      <Footer />
    </div>
  );
}
