import React from 'react';
import "./App.css";


function NavBar() {
    return (
      <div className='navBar'>
        <ul className='nav-menu'>
         <h1>TIENDA DE ROPA</h1>
          <li className="li">INICIO</li>
          <li className="li">ROPA HOMBRE</li>
          <li className="li">ROPA MUJER</li>
          <li className="li">ROPA NIÑOS</li>
        </ul>
      </div>
    );
  }

  export default NavBar
  