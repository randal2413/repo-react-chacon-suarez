import React from "react";
import Card from "./Card.js";
import dataProductos from "./data.js";


function getProductos(){
    return new Promise((resolve) => {
        setTimeout(() => resolve(dataProductos), 500)
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
    <div>
        <h3>lista</h3>
        {dataProductos.map((element) => {
            return (
                <Card
                key={element.id}
                img={element.img}
                nombre={element.nombre}
                descripcion={element.descripcion}
                precio={Element.precio}
                />
            )
        })}
    </div>
)
}

export default ItemListContainer;