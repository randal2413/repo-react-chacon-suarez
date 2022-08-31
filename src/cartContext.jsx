import { useState } from "react";
import { createContext } from "react";



export const cartContext = createContext()

export function CartProvider({children}){
    const [cart, setCart] = useState([])

  function agregarCarrito(item, quantity){  
    console.log("OK!", item, quantity)

    let copiaCart = [...cart]
    copiaCart.push(...item,quantity)

    setCart(copiaCart)
}

return (
    <cartContext.Provider value={{cart, agregarCarrito }} >
        {children}

    </cartContext.Provider>
)

}