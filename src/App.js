import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import CatalogPage from "./components/CatalogPage";
import ShoppingCart from "./components/ShoppingCart";
import "./styles/app.scss";

function App() {
  const [cart, setCart] = useState({});
  const [cartSize, setCartSize] = useState(0);
  const [cartToggled, setCartToggled] = useState(false);

  const handleCartToggle = () => {
    setCartToggled(!cartToggled);
  };

  const handleSubmitToCart = (data) => {
    // if cart is empty or if the data does not exist - add it to the cart for the first time
    if (Object.keys(cart) === 0 || !(data.id in cart)) {
      const { id, name, price, quantity, imageUrl } = data;

      // add item to cart object
      setCart({ ...cart, [id]: { name, price, quantity, imageUrl } });
      // add fresh quantity to cart
      setCartSize(cartSize + quantity);
    } else {
      const { id, name, price, quantity, imageUrl } = data;

      // track old quantity to correctly update totals
      const prevQuantity = cart[id].quantity;
      // add item to cart object
      setCart({
        ...cart,
        [id]: { name, price, quantity: prevQuantity + quantity, imageUrl },
      });
      // make quantity adjustments to the cart
      // setCartSize(cartSize + (newQuantity - oldQuantity));
      setCartSize(cartSize + quantity);
    }
  };

  useEffect(() => {
    if (cartToggled) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [cartToggled]);

  return (
    <div className="App">
      <NavBar cartCount={cartSize} handleCartToggle={handleCartToggle} />
      {cartToggled && (
        <ShoppingCart
          cart={cart}
          handleCartToggle={handleCartToggle}
          setCart={setCart}
        />
      )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/catalog"
          element={<CatalogPage handleSubmitToCart={handleSubmitToCart} />}
        />
      </Routes>
    </div>
  );
}

export default App;
