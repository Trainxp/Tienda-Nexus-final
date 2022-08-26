import React from 'react'
import  Item  from './Item';
import  "./ItemCssGeneral.css"

const ItemList = ({itemsCelulares}) => {

    return (
    <>
    <div className='conteiner' >
     { itemsCelulares.map((item)=>(
           <Item item={item} key={item.id} />
            
        ))
        
        }
    </div>
    </>
    
  )
}

export default ItemList;