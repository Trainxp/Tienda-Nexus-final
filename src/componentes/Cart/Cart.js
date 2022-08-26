import { useContext,  useState } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import "./Cart.css" ;
import { collection, getFirestore, addDoc } from "firebase/firestore";


 const Cart = () => {
  const {cart,deleteAll,deleteOne ,suma}= useContext(CartContext);
  const [Nombre,setNombre]= useState ("")
  const [Phone,setPhone] = useState ("")
  const [Email,setEmail] = useState ("")
  if (cart.length === 0) {
      return (<h2> 
        Aun no hay productos en el carrito :C , Ir al <Link to="/">home</Link> 
      </h2>);
  };

  const order ={
    buyer:{ 
    name: Nombre,
    email: Email,
    phone: Phone
   },
   items:  cart.map (productos => ({id:productos.id, name: productos.name , price: productos.price  })  ) , 
   total: {suma},
}

  const handleClick =()=>{
  const db= getFirestore()
  const ordersCollection= collection (db, "orders");
  addDoc(ordersCollection,order).then(({id}) => console.log (id) )
  deleteAll()
  
}

  return (
    <>
    <div> 

<div className="formulario" > 
<form >
<input onChange = {(e)=>{ setNombre(e.target.value)}}
  type="text" 
  label="Nombre"
  placeholder="Nombre"
  required
/>
<br/>
<br/>
<input onChange = { (e) => {setPhone(e.target.value)}}
  type="number" 
  label="Telefono"
  placeholder="Telefono"
  required
 />
 <br/>
<br/>

<input onChange = { (e) => {setEmail(e.target.value)}}
  type="email" 
  label="email"
  placeholder="ingrese su mail"
  required
 />
</form>

<div>

    <p> Por favor ingrese sus datos en los campos de la izquierda, una vez ingresados presione en el botón "generar orden" para realizar la compra.</p>

</div>

</div>
            {cart.map((prod) => (
                <div className="cartview"
                    key={prod.id}>
                    <img className="imgcartview" src={prod.img} alt={{}} />
                    <div>
                        <h2>{prod.name}</h2>
                        <p>$ {prod.price}.-</p>
                    </div>
                    <button onClick={() => deleteOne(prod.id)}>Eliminar</button>
                </div>
            ))}
            <button onClick={deleteAll}>Eliminar todos los productos</button>
            <h2>Total: ${suma}</h2>
            <button onClick={handleClick} >Generar order</button>
      </div>
      </>
  );
};


export default Cart;
