import React from 'react';
import "./App.css";
import Carro from './CardWidget';


function NavBar() {
    return (
      <div className='navBar'>
        <ul className='nav-menu'>
         <h1>TIENDA DE ROPA</h1>
          <li className="li"> <a className="li" href='#'> INICIO </a></li>
          <li className="li">ROPA HOMBRE</li>
          <li className="li">ROPA MUJER</li>
          <li className="li">ROPA NIÑOS</li>
          <Carro/>
        </ul>
      </div>
    );
  }

  export default NavBar
  