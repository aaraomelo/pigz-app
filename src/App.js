import './App.css';
import Card from './Components/Card';
import Footer from './Components/Footer';
import Header from './Components/Header';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Card.Group.Red />
      <Card.Group.Orange />
      <Card.Group.Yellow />
      <Footer />
    </div>
  );
}
