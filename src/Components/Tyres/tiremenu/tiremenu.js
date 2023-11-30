import React, { useState } from "react";
import "./tiremenu.css";
import { useContext } from "react";
import Cartcontext from "../../../store/store";
import Tireform from "../tireInput/tireform";
import Review from "../Reviewpage/review";
const Tiremenu = (props) => {
  const Cartctx = useContext(Cartcontext);
  const [istrue, setistrue] = useState(false);

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
  const handlereview = () => {
    setistrue(!istrue)
  }
   

  return (
    <>
      <li className="collections">
     
        <div className="image">
       
          <img className="timages" alt="imagess" src={props.image} />
          <h3 className="nametire">{props.name}</h3>
          <button onClick={handlereview} className="review">
            Review TIRE
          </button>
        </div>
      
        <div className="discription">
          <h5>descripition</h5>
          <p>size: {props.size}</p>
          <p>tire: {props.tire}</p>

          <p>rim: {props.rim}</p>
          <p>vechile: {props.vechile}</p>
        
        </div>

        <div className="actions">
          <Tireform price={props.price} additemtocart={HandleItemsToCart} />
        </div>
       
       {istrue && <Review image={props.image} action={handlereview} name={props.name} istrue={istrue}ice size={props.size} tire={props.tire} rim={props.rim} vechile={props.vechile} price={props.price}/> }
      </li>
     
     
    </>
  );
};

export default Tiremenu;
