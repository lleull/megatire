import React from 'react'
import './header.css'
import shoppingCart from './shopping-bag.png'
import { useContext } from "react";
import Cartcontext from "../../store/store";
// import {  useSelector } from 'react-redux/es/hooks/useSelector'
// import { useDispatch } from 'react-redux'
const Header = (props) => {
  const Cartctx = useContext(Cartcontext)

  // const counter = useSelector(state => state.counter)
  const display = props.displaycarts
  // const dispatch = useDispatch()
  // const addcounter =() =>{
  //   dispatch({type:'ADDITEM'})
  const adnumber = Cartctx.items.reduce((currnumber, item) => {
    return currnumber + item.amount
  }, 0)
  // }
  return (
    <React.Fragment>
 <div className='navbar'>
        <div className='head'>
              <h1>MEGA</h1>
              {/* <p>{counter}</p> */}
              {/* <button onClick={addcounter}></button> */}
        </div>
        <div className='cart'>
            <button onClick={display} className='header-button'> 
            <img className='cartimg' src={shoppingCart} alt='shop'/>
            Shop-List <h3 className='amountnum'>{adnumber}</h3> </button>
        </div>
      
    </div>
    <div className="headeroption">
        <ul className="unordered">
          <li className='listmenu'>Sell</li>
          <li className='listmenu'>Buy</li>
          <li className='listmenu'>Contact</li>
          <li className='listmenu'>About</li>
        </ul>
      </div>
    </React.Fragment>
   
  )
}

export default Header
