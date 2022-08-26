import { useState } from "react";
import "./ItemCount.css"

const ItemCount = ({stock,initial, OnAdd }) => {
    
const  [contador, setnuevoval] = useState (initial);
    
   
const Sumar = () => { if(contador < stock)  {setnuevoval (contador +1)  }} ;
const Restar = () => {contador > 0   ? setnuevoval (contador-1) : setnuevoval(contador)};

 return (
    <div className="ItemCount" >
        
        <p className="contador" >{contador}</p>
        <button onClick={Sumar} >+</button>
        <button onClick={Restar} >-</button>
        <button onClick={()=>OnAdd (contador)} >AÑADIR</button>
    </div>
 )

}

export default ItemCount;