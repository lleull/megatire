import React from "react";
import { useRef, useState } from "react";
import "./checkout.css";

const isempty = (value) => value.trim().length === 0;
const isNot5chars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formValidity, setValidity] = useState({
    name: true,
    address: true,
    city: true,
    postal: true,
  });

  const nameinput = useRef();
  const addressinput = useRef();
  const postalinput = useRef();
  const cityinput = useRef();
  const comfirmHandler = (e) => {
    e.preventDefault();
    const name = nameinput.current.value;
    const addres = addressinput.current.value;
    const postal = postalinput.current.value;
    const city = cityinput.current.value;

    props.onSubmit({
      key: name,
      name: name,
      postal: postal,
      city: city,
      addres: addres,
    });

    const nameisValid = !isempty(name);
    const streetisValid = !isempty(addres);
    const postalisValid = isNot5chars(postal);
    const cityisValid = !isempty(city);

    setValidity({
      name: nameisValid,
      address: streetisValid,
      city: cityisValid,
      postal: postalisValid,
    });

    const formisValid = nameisValid && streetisValid && postalisValid && cityisValid;

    if (!formisValid) {
      return;
    }
    //submit to firebase json.stringify()
  };

  const submit = props.onSubmit;
  return (
    <form className="myform" onSubmit={comfirmHandler}>
      <div className={formValidity.name ? "control" : "invalid"}>
        <label htmlFor="name">Your name</label>
        <input className="myinput" ref={nameinput} type="text" id="name" placeholder="name" />
        <br></br>
        {!formValidity.name && <p>name can't be empty</p>}
      </div>
      <div className={formValidity.address ? "control" : "invalid"}>
        <label htmlFor="name">Street- Address</label>
        <input
          className="myinput"
          ref={addressinput}
          type="text"
          id="street"
          placeholder="Address street"
        />
        <br></br>
        {!formValidity.address && <p> address can't be empty</p>}
      </div>
      <div className={formValidity.postal ? "control" : "invalid"}>
        <label htmlFor="name">Postal-code</label>
        <input className="myinput" ref={postalinput} type="text" id="postal" placeholder="23222" />
        <br></br>
        {!formValidity.postal && <p> Postal code must be 5 Chars</p>}
      </div>
      <div className={formValidity.city ? "control" : "invalid"}>
        <label htmlFor="name">City</label>
        <input
          className="myinput"
          ref={cityinput}
          type="text"
          id="City"
          placeholder="Ethiopia - addisabeba"
        />
        <br></br>
        {!formValidity.city && <p>city can't be empty</p>}
      </div>
      <div className="action">
        <button type="submit" onClick={submit} className="submit">
          Confirm{" "}
        </button>
        <button onClick={props.onClose} type="button">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Checkout;
