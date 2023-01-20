import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <Nav cartCount={2} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" />
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </div>
  );
}

export default App;
