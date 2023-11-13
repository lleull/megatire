import React from 'react'
import './header.css'
import shoppingCart from './shopping-bag.png'
const Header = () => {
  return (
    <div className='navbar'>
        <div className='head'>
              <h1>MEGA</h1>
        </div>
        <div className='cart'>
            <button className='header-button'> 
            <img className='cartimg' src={shoppingCart} alt='shop'/>
            Shop-List </button>
        </div>
      
    </div>
  )
}

export default Header
