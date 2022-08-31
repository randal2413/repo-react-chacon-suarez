import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import "./Card.css";
import TraerProductos from './ItemDetailContainer';
import ItemListContainer from './ItemListContainer';
import {CartProvider} from './cartContext';

function App() {
  return (
    <div>
    
   <BrowserRouter>
   <CartProvider>
   <NavBar/>
    <h1 className="destacados">DESTACADOS</h1>
<Routes>
    <Route path='/' element={<ItemListContainer/>}></Route>
    <Route path='/detalle/:id' element={<TraerProductos/>} />
    </Routes>
    </CartProvider>
    </BrowserRouter>
    <br/>




    </div> 
  );
}


export default App;
