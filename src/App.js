import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";

function App() {
  return (
    //this is jsx ,not html
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
