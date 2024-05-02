import { useContext } from "react";
import Home from "./components/Home";
import CartContext from "./context/cartContext"
const App = () => {
  const cart=useContext(CartContext)
  console.log("🚀 ~ App ~ cart:", cart)
  return <Home />;
};

export default App;
