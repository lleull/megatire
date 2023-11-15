import "./App.css";
import CartContextProvide from "./store/CartContextProvide";
import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/header/header";
import Homepage from "./Components/Homepage/Homepage";
import TireCollection from "./Components/Tyres/tirescollection/TireCollection";

const App = () => {
  const [cartspage, setcartspage] = useState(false);

  const displaycart = () => setcartspage(!cartspage);
  return (
    <CartContextProvide>
      <>
 
          <Header displaycarts={displaycart} />
          <div className="App">
            <Homepage />
            <TireCollection />

            {cartspage && <Cart displaycarts={displaycart} />}
          </div>
    
      </>
    </CartContextProvide>
  );
};

export default App;
