import "../styles/home.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <Link to="/catalog">
        <button type="button">Shop</button>
      </Link>
    </main>
  );
}

export default Home;
