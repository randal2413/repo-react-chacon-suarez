import "./ItemDetail.css"
import ItemCount from "./ItemCount";
import {useContext} from "react"
import { cartContext } from "./cartContext";
import { useState } from "react";




function ItemDetail({nombre, precio, descripcion, img, id, stock}){
const {agregarCarrito} = useContext(cartContext)
const [quantityInCart, setquantityInCart] = useState(0)

  function handleAdd(cantidad){
    setquantityInCart(cantidad)
    const itemToCart = {nombre, precio, descripcion, img, id, stock}
  agregarCarrito(itemToCart, cantidad)
  }
  

    return(
        <div className="detalleProducto">

            <div className="img">
              <img src={img} width="500" height="579" alt="imagen" />
            </div>
            <div className="detalle">
              <h1>{nombre}</h1>
              <h2>Codigo del producto: {id}</h2>
              <h3>Precio: ${precio}</h3>
             <a href="#">Conocé nuestras promociones vigentes</a>
             <p>O hasta 3 cuotas sin interes de ${(precio/3).toFixed(1)}</p>
             <hr />
             <h2>Talle</h2>
            <button className="boton-talle">S</button>
            <button className="boton-talle">M</button>
            <button className="boton-talle">L</button>
            <button className="boton-talle">XL</button>
            <h3>Stock Disponible: {stock} unidades</h3>
            {quantityInCart === 0 ? (
              <ItemCount initial={1} stock={stock} onAdd={handleAdd} />
              ) : (
                 <a href="#">Ir al carrito</a>
              )}
            <h3>DESCRIPCION</h3>
            <p>{descripcion}</p>
            </div>
        </div>
        
    )
}

export default ItemDetail;