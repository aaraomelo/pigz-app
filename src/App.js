import './App.css';
import Card from './Components/Card';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Info from './Components/Info';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Card.Group.Red />
      <Card.Group.Orange />
      <Info.Support />
      <Card.Group.Yellow />
      <Info.Contact />
      <Footer />
    </div>
  );
}
