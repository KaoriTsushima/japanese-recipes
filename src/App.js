import Concept from "./pages/Concept";
import Basic from "./pages/GettingStarted";
import Recipes from "./pages/Recipes";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import GettingStarted from "./pages/GettingStarted";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h3>Easy Peasy Cooking Japanese Food</h3>
        <h1>Kaori's Kitchen</h1>
      </header>
      <Routes>
        <Route path="/" element={<Concept />} />
        <Route path="/getting-started" element={<GettingStarted />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </div>
  );
}

export default App;
