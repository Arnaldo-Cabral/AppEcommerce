import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Productos' />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting='Productos por categoría' />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          {/* <Route path='/about' element={<h1>About</h1>} /> */}    
        </Routes>
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
