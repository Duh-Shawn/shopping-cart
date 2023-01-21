import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import "./styles/app.scss";

function App() {
  const [cart, setCart] = useState({});
  const [cartSize, setCartSize] = useState(0);

  const handleSubmitToCart = (data) => {
    // if cart is empty
    // or if the data does not exist
    // add it to the cart for the first time
    if (Object.keys(cart) === 0 || !(data.id in cart)) {
      const { id, name, price, quantity } = data;

      // add item to cart object
      setCart({ ...cart, [id]: { name, price, quantity } });
      // add fresh quantity to cart
      setCartSize(cartSize + quantity);
    } else {
      const { id, name, price, quantity } = data;

      // track old quantity to correctly update totals
      const prevQuantity = cart[id].quantity;
      // add item to cart object
      setCart({
        ...cart,
        [id]: { name, price, quantity: prevQuantity + quantity },
      });
      // make quantity adjustments to the cart
      // setCartSize(cartSize + (newQuantity - oldQuantity));
      setCartSize(cartSize + quantity);
    }
  };
  return (
    <div className="App">
      <Nav cartCount={cartSize} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={<Shop handleSubmitToCart={handleSubmitToCart} />}
        />
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </div>
  );
}

export default App;
