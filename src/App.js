import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
//import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//import ItemCount from './components/ItemCount/ItemCount';
import MercadoLibre from './components/MercadoLibre/MercadoLibre';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <ItemListContainer greeting='Hola Coders' /> */}
      <MercadoLibre />
      
    </div>
  );
}

export default App;
