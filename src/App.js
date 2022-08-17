import './App.css';
import NavBar from './NavBar';
import ItemCount from './ItemCount';
import "./Card.css";
import ItemDetailContainer from './ItemDetailContainer';
import ItemListContainer from './ItemListContainer';

function App() {
  return (
    <div>
    <NavBar/>
    <h1 className="destacados">DESTACADOS</h1>
    <section className='menu'>
    <ItemListContainer/>
    </section>
    <h1 className="destacados">DETALLE</h1>

    <ItemDetailContainer/>
    <br/>
    <ItemCount initial={1} stock={12} />




    </div> 
  );
}


export default App;
