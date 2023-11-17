import React, { useState } from "react";
import "./tiremenu.css";
import { useContext } from "react";
import Cartcontext from "../../../store/store";
import Tireform from "../tireInput/tireform";
const Tiremenu = (props) => {
  const Cartctx = useContext(Cartcontext);
  const [istrue, setistrue] = useState(false)

  const HandleItemsToCart = (amount) => {
    Cartctx.addItem({
      name: props.name,
      id: props.id,
      amount: amount,
      key: props.id,
      price: props.price,
      image: props.image,
    });
  };

  return (
    <>
    <li className="collections">
      <div className="image">
        <img className="timages" src={props.image} />
        <h3>{props.name}</h3>
        <button onClick={() => setistrue(!istrue)} className="review">Review</button>
      </div>
      <div className="discription">
      <h5>descripition</h5>
        <p>size: {props.size}</p>
        <p>tire: {props.tire}</p>

        <p>rim: {props.rim}</p>
        <p>vechile: {props.vechile}</p>
        <h2 className="pricepage">price: {props.price}</h2>
      
      </div>
   

      <div className="actions">
        <Tireform additemtocart={HandleItemsToCart} />
      </div>
    
       
    
    </li>
    <div className="reviewpage">
    {istrue && <>
          <h5>descripition</h5>
          <h3>Tire Name : {props.name}</h3>
        <p>size: {props.size}</p>
        <p>tire: {props.tire}</p>

        <p>rim: {props.rim}</p>
        <p>vechile: {props.vechile}</p>
        <h2 className="pricepage">price: {props.price}</h2>
        
        
        </>}
    </div>
    </>
  );
};

export default Tiremenu;
