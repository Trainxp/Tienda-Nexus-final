import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail"
// import { celulares } from "../../mock/celulares";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import {getFirestore,doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {
    const [cargando, setCargando] = useState(true);
    const [item, setItem] = useState({})
    const {id} = useParams()
  
   
  
    useEffect(()=>{
      setCargando(true);
        const querydb = getFirestore ();
        const queryDoc = doc(querydb, "items" , id );
        getDoc (queryDoc).then(res =>setItem({id:res.id, ...res.data()}) )
        setTimeout(()=>{setCargando(false)},1100);


    },[id])
  
     
    return (
       <> {cargando ? <Loader/>  : <ItemDetail item={item}/> }  </> 
      
     
    )
  }
  
  export default ItemDetailContainer
