import Cards from './components/Cards';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Anime Memory Game</h1>
      <Cards />
     
    </div>
  );
}

export default App;
