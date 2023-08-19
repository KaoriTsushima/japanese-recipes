import Concept from "./Concept";
import Basic from "./Basic";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Easy Peasy Cooking Japanese Food</h3>
        <h1>Kaori's Kitchen</h1>
      </header>
      <hr />
      <Concept />
      <Basic />
    </div>
  );
}

export default App;
