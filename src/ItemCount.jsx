import React from "react"
import "./App.css"
import "./ItemDetail.css"


function ItemCount (props){
    const [cantidad, setCantidad] = React.useState(props.initial)

    const sumarCantidad = () =>{

        setCantidad(cantidad+1)

        if(cantidad === props.stock){
    setCantidad(cantidad, alert("Alcanzo el stock maximo disponible"))
    
}



    }
const restarCantidad = () =>{
    setCantidad(cantidad-1)

    if(cantidad === props.initial){
        setCantidad(cantidad)
    }
}

return(
    <div>
    <div className="boton-contador">
    <button className="restar" onClick={restarCantidad}>-</button>
    <h3>Cantidad= {cantidad}</h3>
    <button className="sumar" onClick={sumarCantidad}>+</button>
    </div>
    <div>
    <button onClick={() => props.onAdd(cantidad)} className="boton-carrito">AGREGAR AL CARRITO</button>
    </div>



    
    </div>
)

}


export default ItemCount