import PropTypes from "prop-types";
import "../styles/CartListItem.scss";

function CartListItem(props) {
  const { id, itemData, handleCartUpdate } = props;
  const { name, price, quantity, imageUrl } = itemData;

  const handleCartChange = (element) => {
    // user updated quantity
    if (element.target.type === "number") {
      // use parent component to update quantity field in cart object
      handleCartUpdate(id, "UPDATE", element.target.value);
    } else {
      // if it is the delete button - use parent component to complete remove the item object from the cart object
      handleCartUpdate(id, "DELETE");
    }
  };

  return (
    <div className="list-item">
      <img src={`https://${imageUrl}`} alt="item in cart" />
      <div className="list-item-details">
        <p>{name}</p>
        <p className="list-item-price">{price}</p>
        <div className="list-item-inputs">
          <input
            type="number"
            defaultValue={quantity}
            onChange={handleCartChange}
            min="1"
          />
          <button type="button" onClick={handleCartChange}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
CartListItem.propTypes = {
  itemData: PropTypes.object.isRequired,
  handleCartUpdate: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
export default CartListItem;
