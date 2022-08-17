import "./ItemDetail.css"

function ItemDetail({nombre, precio, descripcion, img, id}){
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
            <div>
            <button className="boton-carrito">AGREGAR AL CARRITO</button>
            </div>
            <h3>DESCRIPCION</h3>
            <p>{descripcion}</p>
            </div>
        </div>
        
    )
}

export default ItemDetail;