import Input from "../../UI/Input";
import { useState } from "react";
import "./mealfrom.css";
import { useRef } from "react";

const MealitemForm = (props) => {
  const [amountisValid, setamountisValid] = useState(true);
  const amountInputRef = useRef();
  const submitHanlder = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountnumber = +enteredAmount;
    if (enteredAmount.trim().length === 0 || enteredAmountnumber < 1 || enteredAmountnumber > 5) {
      setamountisValid(false);
      return;
    }
    props.onAddToCart(enteredAmountnumber);
  };
  return (
    <form className="display" onSubmit={submitHanlder}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          min: "1",
          max: "5",
          id: "amount",
          type: "number",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className="bu" type="submit">+Add</button>
      {!amountisValid && <h4>error</h4>}
    </form>
  );
};

export default MealitemForm;
