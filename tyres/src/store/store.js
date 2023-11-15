import { createContext } from "react";

const Cartcontext = createContext({
  items: [],
  addItem: () => [],
  totalAmount: (item) => {},
  removeItem: (id) => {},
});


export default Cartcontext