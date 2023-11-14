import React from "react";
import Modal from "../UI/Modal";
const Cart = (props) => {
    const displayer = (props.displaycarts)
  return (
    <Modal onClose={displayer}>
      <div className="cartpage">
        <div className="itemlist">

    
        <div className="img-price">

        </div>
        <div className="actions">
            <div className="buts">
               <button className="buttons">x</button>
            </div>
        </div>
        </div>

        <div className="">
              <button>Close</button>
              <button>order</button>
            </div>
      </div>
    </Modal>
  );
};

export default Cart;
