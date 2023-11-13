import React from 'react'
import './homepage.css'
import images from './1442fde8476f38341dbf075899c5d473-removebg-preview.png'
const Homepage = () => {
  return (
    <div className='homepage'>
        <div className='summary'>
          <div className='small'>
          <div>
          <h1 className='h1class'>MEGA ENGINNERING PLC</h1>
                <p>Enjoy the great experience of online souring now. We have selected the best suppliers to provide high quality products for your cars </p>
          </div>
               
                <button className='sumbutton'>MORE ABOUT US</button>
        </div>

          </div>
          
        
        <img className='imgclass' src={images} alt='image'/>
    </div>
  )
}

export default Homepage
