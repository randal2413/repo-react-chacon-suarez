 import React from "react";
import Card from "./Card.js";
import dataProductos from "./data.js";
import "./Card.css"



function getProductos(){
    return new Promise((resolve) => {
        setTimeout(() => resolve(dataProductos), 0)
    })
}

 function ItemListContainer() {
    const [dataProductos, setData] = React.useState([])

React.useEffect(() => {
    getProductos().then((respuesta) =>{
        setData(respuesta)
    })
}, [])

return(
    <div className="menu">
        {dataProductos.map((element) => {
            return (
                <Card
                key={element.id}
                img={element.img}
                nombre={element.nombre}
                descripcion={element.descripcion}
                precio={element.precio}
                />
            )
        })}
    </div>
)
}

export default ItemListContainer; 