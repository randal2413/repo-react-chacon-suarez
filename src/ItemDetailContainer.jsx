import dataProductos from "./data"
import React from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

function TraerProductos(){
    const [data, setData] = React.useState([])

    
    const idUrl = useParams().id
   




 function ItemDetailContainer() {
    return new Promise((resolve) => {

        resolve(dataProductos[idUrl-1])   
    })
 }


    

React.useEffect(() => {
    ItemDetailContainer().then((respuesta) =>
        setData(respuesta))
        .catch((error) => alert(error))
}, [])

return(
    <div > 
            
                <ItemDetail 
                img={data.img}
                nombre={data.nombre}
                descripcion={data.descripcion}
                precio={data.precio}
                id={data.id}
                stock={data.stock}
                />
            
        
        
    </div>
)
}

export default TraerProductos