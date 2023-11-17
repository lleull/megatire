import Cartcontext from "./store";
import { useReducer } from "react";
import React from "react";

const defualtState = {
  items: [],
  totalAmount: 0,
};

const cartreducer = (state, action) => {
  if (action.type === "ADD") {
    const updatetotalamount = state.totalAmount + action.item.price * action.item.amount;
    const exisitingitem = state.items.findIndex((item) => item.id === action.item.id);
    const exisitingCartItem = state.items[exisitingitem];
    let updatedItems;
    if (exisitingCartItem) {
      const updatedItem = {
        ...exisitingCartItem,
        amount: exisitingCartItem.amount + 1,
      };

      updatedItems = [...state.items];
      updatedItems[exisitingitem] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatetotalamount,
    };
  }
  if (action.type === "REMOVE") {
         const idchecker = state.items.findIndex((item) => item.id === action.item.id)
        const exisitingItems = state.items[idchecker]
          const updatedTotalamount = state.totalAmount - exisitingItems.price * exisitingItems.amount
          let updatedItems;
          if(exisitingItems.amount === 1) {
            updatedItems = state.items.filter((item) => item.id !== action.id)
          }else{
           const  updatedItem = {...exisitingItems, amount: exisitingItems.amount - 1}
            updatedItems = [...state.items]
           updatedItems[exisitingItems] = updatedItem
          }
      
         return {
          items: updatedItems,
          totalAmount: updatedTotalamount,
         }

  }
};

const CartContextProvide = (props) => {
  const [state, dispatch] = useReducer(cartreducer, defualtState);

  const additemstocart = (item) => {
    dispatch({ type: "ADD", item: item });
  };

  const removeitemcart = (id) => {
    dispatch({type: "REMOVE", id:id})
  }

  const cartContext = {
    items: state.items,
    addItem: additemstocart,
    totalAmount: state.totalAmount,
    removeItem:  removeitemcart,
  };

  return <Cartcontext.Provider value={cartContext}>{props.children}</Cartcontext.Provider>;
};

export default CartContextProvide;
