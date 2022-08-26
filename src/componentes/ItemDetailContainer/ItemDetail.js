import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";


const ItemDetail = ({item}) => {
    const [cantidad, setCantidad] = useState (0)
    const {addToCart} = useContext (CartContext);

    
    const OnAdd = (cantidad) => { setCantidad(cantidad);addToCart (item,cantidad)  }
  
 return (
    <div className="itemDetail">
      <div className="img-detail-cont">
        <img src={item.img} alt="" className="img-detail" />
      </div>
      <div className="text-container">
        <div className="titulo-container">
            <h1>{item.name}</h1>
            
            <h3 className="precio-container" >${item.price}</h3>
        </div>
        {cantidad===0 ?
            <div><ItemCount  stock = {item.stock} initial= {1} OnAdd = {OnAdd}  /></div> :
            <Link to ="/cart" >Ir al carrito</Link>}
        
        
        <p className="p-container">
          {item.description}
        </p>
        
       
      </div>
    </div>
  );
};






export default ItemDetail;