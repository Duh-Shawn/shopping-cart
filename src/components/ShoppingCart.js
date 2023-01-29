import "../styles/cart.scss";
import PropTypes from "prop-types";
import CartListItem from "./CartListItem";

function ShoppingCart(props) {
  const { handleCartToggle, cart, setCart } = props;

  const handleCartUpdate = (id, action, quantity) => {
    if (action === "UPDATE") {
      // get old item status
      const oldItem = cart.get(id);
      setCart(
        new Map(
          cart.set(id, {
            name: oldItem.name,
            price: oldItem.price,
            quantity,
            imageUrl: oldItem.imageUrl,
          })
        )
      );
    } else {
      cart.delete(id);
      setCart(new Map(cart));
    }
  };

  return (
    <div className="shopping-cart-modal">
      <div className="shopping-cart-container">
        <div className="shopping-cart-header">
          <h2>Cart</h2>
          <button
            type="button"
            className="close-cart-button"
            onClick={handleCartToggle}
          >
            X
          </button>
        </div>
        <div className="shopping-cart-list">
          {[...cart.keys()].map((itemKey) => (
            <CartListItem
              key={itemKey}
              id={itemKey}
              itemData={cart.get(itemKey)}
              handleCartUpdate={handleCartUpdate}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
ShoppingCart.propTypes = {
  handleCartToggle: PropTypes.func.isRequired,
  cart: PropTypes.object.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default ShoppingCart;
