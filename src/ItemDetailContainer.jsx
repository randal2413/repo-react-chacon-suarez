import dataProductos from "./data"
import React from "react"
import ItemDetail from "./ItemDetail"

function TraerProductos(){
    return new Promise((resolve) => {
        setTimeout(() => resolve(dataProductos[0]), 0)
    })
}

 function ItemDetailContainer() {
    const [dataProductos, setData] = React.useState([])

React.useEffect(() => {
    TraerProductos().then((respuesta) =>{
        setData(respuesta)
    })
}, [])

return(
    <div > 
            
                <ItemDetail 
                key={dataProductos.id}
                img={dataProductos.img}
                nombre={dataProductos.nombre}
                descripcion={dataProductos.descripcion}
                precio={dataProductos.precio}
                id={dataProductos.id}
                />
            
        
        
    </div>
)
}

export default ItemDetailContainer