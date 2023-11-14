import "./App.css";
// import Store from "./Store/store";
import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/header/header";
// import { Provider } from "react-redux";
import Homepage from "./Components/Homepage/Homepage";
import TireCollection from "./Components/Tyres/tirescollection/TireCollection";
const App = () => {
  const [cartspage, setcartspage] = useState(false);

  const displaycart = () => setcartspage(!cartspage);
  return (
    <>
      <Header displaycarts={displaycart} />
      <div className="App">
        <Homepage />
        <TireCollection />

        {cartspage && <Cart displaycarts={displaycart} />}
      </div>
    </>
  );
};

export default App;
