import React from 'react'
import './tiremenu.css'
const Tiremenu = (props) => {
  return (
    <li className='collections'>
        <div className='image'>
       
          <img  className='timages'  src={props.image} alt='image'/>
          <h3>{props.name}</h3>
        </div>
        <div className='descripition'>
          
          <p>size: {props.size}</p>
          <p>tire: {props.tire}</p>
        
          <p>rim: {props.rim}</p>
          <p>vechile: {props.vechile}</p>
          <h2>price: {props.price}</h2>
       
          </div>
        
          
        <div className='actions'>
          <button className='addbutton'>ADD TO CART</button>
        </div>
      
    </li>
  )
}

export default Tiremenu
