import Nav from "./components/Nav";
import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <Nav cartCount={999} />
    </div>
  );
}

export default App;
