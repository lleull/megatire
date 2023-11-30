import React from 'react'

import { createPortal } from 'react-dom'
import './review.css'
const Review = (props) => {
  return(createPortal(
    <>
    <div onClick={props.action} className='backdrops'>

    </div>
    <div className='modals'>

   
   <div className='modalss'>

   
    <div className="reviewpage">
    {props.istrue &&
    (
      <>
        <img src={props.image} alt='img' className='descimg'/>
        <h3>Tire Name : {props.name}</h3>
        <p className='desc'>size: {props.size}</p>
        <p className='desc'>tire: {props.tire}</p>

        <p className='desc'>rim: {props.rim}</p>
        <p className='desc'>vechile: {props.vechile}</p>
        <h2 className="pricepage">price: {props.price}</h2>
       
      </>
    )}
    </div>
  </div>
  </div>
  </>,
  
 document.getElementById("review") ))
  
}

export default Review

