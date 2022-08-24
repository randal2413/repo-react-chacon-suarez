import "./Card.css"
import { NavLink } from "react-router-dom"

function Card({nombre, precio, descripcion, img, id}){
    return(
        <div>
            <div>
                <div className="card">
                    <div className="card-img">
                        <img src={img} height="300" width="230" alt="imagen" />
                    </div>
                    <div className="card-detalle">
                        <h2>{nombre}</h2>
                        <p className="descripcion">{descripcion}</p>
                        <h3>${precio}</h3>
                        <NavLink to={`/detalle/${id}`}>Ver mas</NavLink>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Card;