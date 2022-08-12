import React from "react"
import "./App.css"

function ItemCount (props){
    const [cantidad, setCantidad] = React.useState(1)

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
    <div className="boton-contador">
    <h3>Contador Boton</h3>
    <button onClick={restarCantidad}>-</button>
    <h3>Cantidad= {cantidad}</h3>
    <button onClick={sumarCantidad}>+</button>
    <button>Agregar al Carrito</button>



    </div>
)

}


export default ItemCount