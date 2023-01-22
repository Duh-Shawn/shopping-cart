import PropTypes from "prop-types";

function CartListItem(props) {
  const { itemData } = props;
  const { name, price, quantity } = itemData;
  return (
    <div className="list-item">
      <p>{name}</p>
      <p>{price}</p>
      <p>{quantity}</p>
    </div>
  );
}
CartListItem.propTypes = {
  itemData: PropTypes.object.isRequired,
};
export default CartListItem;
