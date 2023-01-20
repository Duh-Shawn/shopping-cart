import "../styles/home.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <Link to="/shop">
        <button type="button">Shop Now</button>
      </Link>
    </main>
  );
}

export default Home;
