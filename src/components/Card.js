import PropTypes from "prop-types";
import "../styles/card.scss";

function Card(props) {
  const { suit } = props;
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
          <button type="button">Add to cart</button>
        </div>
      </div>
    </div>
  );
}
Card.propTypes = {
  suit: PropTypes.object.isRequired,
};

export default Card;
