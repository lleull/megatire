import Cartcontext from "./store";
import { useReducer } from "react";
import React from 'react'

const defualtState = {
    items: [],
    totalAmount: 0
}

const cartreducer =(state, action) => {
    if(action.type === 'ADD'){
        
        const updatetotalamount = state.items.price + action.item.price * action.item.amount
        const exisitingitem = state.items.findIndex((item) => item.id === action.item.id)
        const exisitingCartItem = state.items[exisitingitem]
        let updatedItems;
        if(exisitingCartItem){
            const updatedItem = {
                ...exisitingCartItem,
                amount: exisitingCartItem.amount + 1
            };

            updatedItems = [...state.items];
            updatedItems[exisitingCartItem] = updatedItem
        }else {
            updatedItems= state.items.concat(action.item)
        }

        return {
            items: updatedItems,
            totalAmount: updatetotalamount,
        }
    }
}



const CartContextProvide = (props) => {
const [state, dispatch] = useReducer(cartreducer, defualtState)

const additemstocart = (item) => {
    dispatch({type:'ADD', item:item})
}

const cartContext ={
    items: state.items,
    addItem: additemstocart,
    totalAmount: state.totalAmount
}
   
  return (
     <Cartcontext.Provider
      value={cartContext} >
          {props.children}
     </Cartcontext.Provider>      

  )
}

export default CartContextProvide
