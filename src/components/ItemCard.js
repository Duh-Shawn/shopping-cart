import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/card.scss";

function ItemCard(props) {
  const { suit, handleSubmitToCart } = props;

  const [selectedValue, setSelectedValue] = useState(0);

  const handleIncrementDecrement = (event) => {
    const { value } = event.target;
    setSelectedValue(value);
  };

  const handleAddToCart = () => {
    if (selectedValue > 0) {
      const data = {
        id: suit.id,
        name: suit.name,
        price: suit.price.current.text,
        quantity: Number(selectedValue),
        imageUrl: suit.imageUrl,
      };

      // send this to parent component to add this to cart
      handleSubmitToCart(data);
      // reset selected value back to 0;
      setSelectedValue(0);
    }
  };

  return (
    <div className="item-card">
      <div className="item-image">
        <img alt="suit" src={`https://${suit.imageUrl}`} />
      </div>
      <div className="item-info">
        <div className="item-title">
          <p>{suit.name}</p>
        </div>
        <div className="item-price-buy">
          <p>{suit.price.current.text}</p>
          <div className="item-quantity">
            <input
              type="number"
              min="0"
              placeholder={0}
              value={selectedValue}
              onChange={handleIncrementDecrement}
            />
            <button type="button" onClick={handleAddToCart}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
ItemCard.propTypes = {
  suit: PropTypes.object.isRequired,
  handleSubmitToCart: PropTypes.func.isRequired,
};

export default ItemCard;
