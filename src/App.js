import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import CatalogPage from "./components/CatalogPage";
import ShoppingCart from "./components/ShoppingCart";
import "./styles/app.scss";

function App() {
  const [cart, setCart] = useState(new Map());
  const [cartSize, setCartSize] = useState(0);
  const [cartToggled, setCartToggled] = useState(false);

  const handleCartToggle = () => {
    setCartToggled(!cartToggled);
  };

  const handleSubmitToCart = (data) => {
    // if cart is empty or if the data does not exist - add it to the cart for the first time
    if (cart.size === 0 || !cart.has(data.id)) {
      const { id, name, price, quantity, imageUrl } = data;
      // add item to cart object
      setCart(new Map(cart.set(id, { name, price, quantity, imageUrl })));
      // add fresh quantity to cart
    } else {
      const { id, name, price, quantity, imageUrl } = data;
      // get the old cart item
      const oldItem = cart.get(id);
      setCart(
        new Map(
          cart.set(id, {
            name,
            price,
            quantity: oldItem.quantity + quantity,
            imageUrl,
          })
        )
      );
    }
  };

  useEffect(() => {
    if (cartToggled) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [cartToggled]);

  useEffect(() => {
    let numberOfItemsInCart = 0;

    if (cart.size !== 0) {
      [...cart.keys()].forEach((itemKey) => {
        numberOfItemsInCart += Number(cart.get(itemKey).quantity);
      });
    }

    setCartSize(Number(numberOfItemsInCart));
  }, [cart]);

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
