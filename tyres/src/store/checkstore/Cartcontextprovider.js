// import React, { useReducer } from "react";
// import Cartcontext from "./cartContext";
// const defaultCartState = {
//   items: [],
//   totalAmount: 0,
// };

// const cartReducer = (state, action) => {
//   if (action.type === "ADD") {
//     const updateTotalItems = state.totalAmount + action.item.price * action.item.amount;
//     const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
//     const exisitingCartItem = state.items[existingCartItemIndex];
//     let updatedItems;

//     if (exisitingCartItem) {
//       const updatedItem = {
//         ...exisitingCartItem,
//         amount: exisitingCartItem.amount + 1,
//       };
//       updatedItems = [...state.items];
//       updatedItems[existingCartItemIndex] = updatedItem;
//     } else {
//       updatedItems = state.items.concat(action.item);
//       }

    

//     return {
//       items: updatedItems,
//       totalAmount: updateTotalItems,
//     };
//   }
//   if(action.type === 'REMOVE'){
//     const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
//     const existingCartId= state.items[existingCartItemIndex]
//     const updateTotalAmount = state.totalAmount - existingCartId.price;
//     let updatedItems;
//      if(existingCartId.amount === 1) {
//         updatedItems =  state.items.filter((item) => item.id !== action.id)
//      }else{
//       const updatedItem = {...existingCartId, amount:existingCartId.amount - 1}
//       updatedItems = [...state.items];
//       updatedItems[existingCartItemIndex] = updatedItem

//      }
//      return {
//       items:updatedItems,
//       totalAmount :updateTotalAmount
     
//      }
    
// }
//   return defaultCartState;
// };

// const Cartcontextprovider = (props) => {
//   const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
//   const addItemToHandler = (item) => {
//     dispatchCartAction({ type: "ADD", item: item });
//   };
//   const removeItemfromHandler = (id) => {
//     dispatchCartAction({ type: "REMOVE", id: id });
//   };
//   const cartContext = {
//     items: cartState.items,
//     totalAmount: cartState.totalAmount,
//     addItem: addItemToHandler,
//     removeItem: removeItemfromHandler,
//   };

//   return <Cartcontext.Provider value={cartContext}>{props.children}</Cartcontext.Provider>;
// };

// export default Cartcontextprovider;
