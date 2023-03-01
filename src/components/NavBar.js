/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link } from "react-router-dom";
import { FiMenu, FiUserX, FiFolder, FiShoppingCart } from "react-icons/fi";
import PropTypes from "prop-types";
import "../styles/nav.scss";

function Nav(props) {
  const { cartCount, handleCartToggle } = props;

  return (
    <nav>
      <ul>
        <li className="nav-menu">
          <FiMenu size="1.5em" />
        </li>
        <li className="nav-header">
          <Link to="/">
            <h1>Suit Outpost</h1>
          </Link>
        </li>
        <li className="nav-right-buttons">
          <div>
            <FiUserX size="1.5em" />
          </div>
          <div>
            <FiFolder size="1.5em" />
          </div>
          <div
            className="cart-section"
            onClick={handleCartToggle}
            role="menuitem"
            tabIndex="-1"
          >
            <FiShoppingCart size="1.5em" />
            <div className="cart-total">
              <p>{cartCount}</p>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}
Nav.propTypes = {
  cartCount: PropTypes.number.isRequired,
  handleCartToggle: PropTypes.func.isRequired,
};

export default Nav;
