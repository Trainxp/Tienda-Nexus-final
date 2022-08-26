import CartShop from "./img/Carshop.png"
import "./CartWitget.css"
import { CartContext } from "../../context/cartContext"
import { useContext } from "react"

const CartWitget = ()=> {
      const {cart} = useContext(CartContext)
      return  ( <>    <img className="ImgShop" src ="https://images.vexels.com/media/users/3/200097/isolated/preview/942820836246f08c2d6be20a45a84139-icono-de-carrito-de-compras-carrito-de-compras.png" alt="Cartshop"></img>
      
      <span className = "cart" >{cart.length}</span>
      </>
      )

            
   
}

export default CartWitget;