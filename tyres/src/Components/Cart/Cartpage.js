import React from 'react'
import { useContext } from 'react'
import Cartcontext from '../../store/store'
import "./cartitem.css"
const Cartpage = (props) => {

    const {items}  = useContext(Cartcontext)
  return (
    <div>
      {items.map((item) =>{
         return (
            <li className="cart-item">
      <div>
        <div className='imgname'><h2>{item.name}</h2>
        <img className='cartimage' src={item.image} alt='img'/></div>
        
        <div className="summery">
      
          <span className="price">{item.price}</span>
          <span className="amount">x{item.amount}</span>
        </div>
      </div>
      <div className="action">
        <button onClick={props.onAdd}>+</button>
        <button onClick={props.onRemove}>-</button>
      </div>
    </li>
         )
      })}
    </div>
  )
}


export default Cartpage
