import "../styles/cart.scss";
import PropTypes from "prop-types";

function ShoppingCart(props) {
  const { handleCartToggle } = props;

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
      </div>
    </div>
  );
}
ShoppingCart.propTypes = {
  handleCartToggle: PropTypes.func.isRequired,
};

export default ShoppingCart;
