import React from "react";
import Modal from "../UI/Modal";
import { useContext } from "react";
import Cartcontext from "../../store/store";
import Cartpage from "./Cartpage";
import './Cart.css'

const Cart = (props) => {
  const {items}= useContext(Cartcontext);
  const {totalAmount} = useContext(Cartcontext)

  const displayer = props.displaycarts;


  console.log(items)

    return (
      <Modal onClose={displayer}>
          
            <div className="cartitems">
<Cartpage/>
            </div>
             
             <div className="manageorder">
              <h2>Total-Amount: ${totalAmount}</h2>
             <div className="buttonaction">
             <button onClick={props.displaycarts} className="closebt">Close</button>
             <button className="orderbt">Order </button>
             </div>
             </div>
            
          
      </Modal>
  
  );
};

export default Cart;
