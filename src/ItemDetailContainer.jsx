import dataProductos from "./data"
import React from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

function TraerProductos(){
    const [data, setData] = React.useState([])

    
    const idUrl = useParams.id
   




 const ItemDetailContainer = () => {
    return new Promise((resolve) => {

        let itemEncontrado = dataProductos.find((element) => element.id = idUrl)
        resolve(itemEncontrado)   
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
                key={data.id}
                img={data.img}
                nombre={data.nombre}
                descripcion={data.descripcion}
                precio={data.precio}
                id={data.id}
                />
            
        
        
    </div>
)
}

export default TraerProductos