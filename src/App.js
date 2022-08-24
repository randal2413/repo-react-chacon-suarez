import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import ItemCount from './ItemCount';
import "./Card.css";
import TraerProductos from './ItemDetailContainer';
import ItemListContainer from './ItemListContainer';

function App() {
  return (
    <div>
    
   <BrowserRouter>
   <NavBar/>
    <h1 className="destacados">DESTACADOS</h1>
<Routes>
    <Route path='/' element={<ItemListContainer/>}></Route>
    <Route path='/detalle/:id' element={<TraerProductos/>} />
    </Routes>
    </BrowserRouter>
    <br/>
    <ItemCount initial={1} stock={12} />




    </div> 
  );
}


export default App;
