import React from 'react'
import './header.css'
import shoppingCart from './shopping-bag.png'
import { useContext } from "react";
import Cartcontext from "../../store/store";


const Header = (props) => {
  const Cartctx = useContext(Cartcontext)

  const display = props.displaycarts

  const adnumber = Cartctx.items.reduce((currnumber, item) => {
    return currnumber + item.amount
  }, 0)
  
  return (
    <React.Fragment>
 <div className='navbar'>
        <div className='head'>
              <h1>MEGA</h1>
          
        </div>
        <div className='cart'>
            <button onClick={display} className='header-button'> 
            <img className='cartimg' src={shoppingCart} alt='shop'/>
            ShopCart <h3 className='amountnum'>{adnumber}</h3> </button>
            <div className='menubar'>
       {/* <img className='menuimage' src={meunbars} alt='menu'/> */}
        </div>
      

       </div>
      

        
      
    </div>
    {/* <div className="headeroption">
        <ul className="unordered">
          <li className='listmenu'>Sell</li>
          <li className='listmenu'>Buy</li>
          <li className='listmenu'>Contact</li>
          <li className='listmenu'>About</li>
        </ul>
      </div> */}
    </React.Fragment>
   
  )
}

export default Header
