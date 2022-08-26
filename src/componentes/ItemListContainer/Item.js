import React from 'react'
import  "./ItemCssGeneral.css"
import { Link } from 'react-router-dom'

export const item = ({item}) => {
  return (
    <div className='card'  >
    <p className='nombreCard' >{item.name}</p>
    <p className='stock' > stock {item.stock}</p>
    <img src={item.img} alt=""   />
    <p className='precio'>precio ${item.price}</p>
    <Link to = {`/item/${item.id}`} >  <button>Ver detalles</button> </Link>
</div>
  )
}

export default item;




