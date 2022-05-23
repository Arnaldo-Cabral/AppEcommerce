import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting='Ecommerce con React y Boostrap' />   
      
    </div>
  );
}

export default App;
