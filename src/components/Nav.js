import { FiMenu, FiUserX, FiFolder, FiShoppingCart } from "react-icons/fi";
import PropTypes from "prop-types";
import "../styles/nav.scss";

function Nav(props) {
  const { cartCount } = props;

  return (
    <nav>
      <ul>
        <li className="nav-menu">
          <FiMenu size="1.5em" />
        </li>
        <li className="nav-header">
          <h1>Men&apos;s Outpost</h1>
        </li>
        <li className="nav-right-buttons">
          <div>
            <FiUserX size="1.5em" />
          </div>
          <div>
            <FiFolder size="1.5em" />
          </div>
          <div className="cart-section">
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
};

export default Nav;
