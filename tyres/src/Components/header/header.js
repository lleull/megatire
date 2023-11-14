import React from 'react'
import './header.css'
import shoppingCart from './shopping-bag.png'
const Header = (props) => {
  const display = props.displaycarts
  return (
    <div className='navbar'>
        <div className='head'>
              <h1>MEGA</h1>
        </div>
        <div className='cart'>
            <button onClick={display} className='header-button'> 
            <img className='cartimg' src={shoppingCart} alt='shop'/>
            Shop-List </button>
        </div>
      
    </div>
  )
}

export default Header
