import React from "react";
import Modal from "../UI/Modal";
import { useContext } from "react";
import Cartcontext from "../../store/store";
import Cartpage from "./Cartpage";
import { useState } from "react";
import "./Cart.css";
import Checkout from "./Checkout";

const Cart = (props) => {
  const { items } = useContext(Cartcontext);
  const { totalAmount } = useContext(Cartcontext);
  const [checkoutshow, setcheckoutshow] = useState(true);
  const { removeItem } = useContext(Cartcontext);

  const cartItemRemovalHandler = (id) => {
    removeItem(id);
  };

  const handlecheckout = () => {
    setcheckoutshow(!checkoutshow);
  };

  const displayer = props.displaycarts;
  const datafetched = async (data) => {
    const response = await fetch(
      "https://newinput-8da77-default-rtdb.firebaseio.com/orderdata.json",
      {
        method: "POST",
        body: JSON.stringify(data()),
      }
    );

    response().catch(console.log("error while sending data"));
    if (datafetched.ok) {
      alert("Ordered Succesfully");
    }
  };

  console.log(items);

  return (
    <Modal onClose={displayer}>
      <div className="cartitems">
        {items.map((item) => {
          return (
            <>
              <Cartpage
                image={item.image}
                key={item.id}
                name={item.name}
                price={item.price}
                amount={item.amount}
                onRemove={cartItemRemovalHandler.bind(null, item.id)}
                checkoutpag={checkoutshow}
              />
            </>
          );
        })}
        
      </div>

      <div className="manageorder">
        <h2>Total-Amount: ${totalAmount}</h2>
        <div className="buttonaction">
          {checkoutshow && (
            <button onClick={props.displaycarts} className="closebt">
              Close
            </button>
          )}

          {checkoutshow && (
            <button onClick={handlecheckout} className="orderbt">
              Order{" "}
            </button>
          )}
        </div>
      </div>
      {!checkoutshow && <Checkout onClose={props.displaycarts} onSubmit={datafetched} />}
    </Modal>
  );
};

export default Cart;
