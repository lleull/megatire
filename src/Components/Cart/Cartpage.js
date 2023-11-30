import React from "react";

import "./cartitem.css";

const Cartpage = (props) => {

  return (
    <div>
      {props.checkoutpag && (
        <div>
          <li className="cart-item">
            <div>
              <div className="imageandname">
                <div className="imgname">
                  <h2 className="itemname">{props.name}</h2>
                  <img className="cartimage" src={props.image} alt="img" />
                </div>
              </div>

              <div className="summery">
                <span className="price">{props.price}</span>
                <span className="amount">X{props.amount}</span>
              </div>
            </div>
            <div className="action">
              <button onClick={props.onRemove}>x</button>
            </div>
          </li>
        </div>
      )}
    </div>
  )
};

export default Cartpage;
