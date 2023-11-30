import React from 'react'

import { createPortal } from 'react-dom'
import './review.css'
const Review = (props) => {
  return(createPortal(
    <>
    <div onClick={props.action} className='backdrop'>

    </div>
    <div className='modals'>

   
   <div className='modal'>

   
    <div className="reviewpage">
    {props.istrue &&
    (
      <>
        <h5>descripition</h5>
        <h3>Tire Name : {props.name}</h3>
        <p>size: {props.size}</p>
        <p>tire: {props.tire}</p>

        <p>rim: {props.rim}</p>
        <p>vechile: {props.vechile}</p>
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

