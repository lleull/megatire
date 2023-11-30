import React from 'react'
import './header.css'
import shoppingCart from './shopping-bagg.png'
import menubar from './icons.png'
import cancel from './icons8-cancel-50.png'
import { useContext } from "react";
import Cartcontext from '../../store/store'
import { useState } from 'react';

const Header = (props) => {
  const [menu, setmenu] = useState(false);
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
           <p className='shopcar'> ShopCart</p> <h3 className='amountnum'>{adnumber}</h3> </button>
            <div className='menubar'>
  
        </div>
      

       </div>
       
        
       {menu === false ?<img onClick={() => setmenu(true)} src={menubar} className='menubar' alt='menu'/> : <></>}

      

        
      
    </div>
    {menu === true ? 
  
     <div className="headeroption">
        <img onClick={() => setmenu(false)} src={cancel} className='cancel' alt='menu'/>
     <ul className="unordered">

      <p>Options</p>
       <li className='listmenu'>Sell</li>
       <li className='listmenu'>Buy</li>
       <li className='listmenu'>Contact</li>
       <li className='listmenu'>About</li>
     </ul>
   </div>:
   <></>
    
  }
   
    </React.Fragment>
   
  )
}

export default Header
