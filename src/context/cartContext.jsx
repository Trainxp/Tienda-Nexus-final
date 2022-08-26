
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext ()

const Provider = (props) =>{
    const [cart,setCart]= useState ([]);
    const [suma,setSuma] = useState(0)

    

    const totalCart =()=>{
        let suma = 0
        cart.forEach(item => suma +=(item.price*item.cantidad ));
        setSuma(suma)

    }

    useEffect(() => {
       totalCart()
    }, [cart])



const addToCart = (item,cantidad) => {
    if (isInCart(item.id)) {
        cart.map(product => {
            if(product.id === item.id){
                product.cantidad = cantidad
                setCart(cart)
            }
            })
        
    } else {
        setCart ([...cart,{...item,cantidad}]);
    }
    
  }
    

const deleteOne =(id) =>{
   const productosFiltrodos=cart.filter((prod)=>prod.id !==id);
   setCart(productosFiltrodos)
};


const deleteAll = () =>{
    setCart([])
}


const isInCart = (id) => {
    return cart.some (prod => prod.id === id)
}


    return (
        <CartContext.Provider value = {{cart, addToCart, deleteAll , deleteOne, suma}}  >
            {props.children}

        </CartContext.Provider>
    )

}

export default Provider