import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import  ItemList  from "./ItemList";
import {getFirestore,collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = ({greeting}) => {
    const {categoria} = useParams()
    const [cargando, setCargando] = useState(true);
    const [items,setItems]= useState([]);
     useEffect(() => {
            setCargando (true)
            const querydb = getFirestore();
            const queryColletcion = collection (querydb, "items" );
          if (categoria)  {
            const queryFilter = query (queryColletcion, where ("categoria" , "==", categoria  )  )
            getDocs (queryFilter).then(res=>  setItems(res.docs.map(productsCels=> ({id:productsCels.id, ...productsCels.data()}) ))) 
          }else {
            getDocs (queryColletcion).then(res=>  setItems(res.docs.map(productsCels=> ({id:productsCels.id, ...productsCels.data()}) ))) 
            
          }
          setTimeout(()=>{setCargando(false)},1200)
          },[categoria]);

    
    return <div >
        <>
        
        <h1>{greeting}</h1>
        <hr></hr>
        {cargando ? <Loader/>  : <ItemList itemsCelulares ={items} /> } 
        {/* <ItemList itemsCelulares ={items} />        */}
        </>
    </div>
}




export default ItemListContainer;
