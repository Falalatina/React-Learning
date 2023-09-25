import { useState } from "react";
import "./App.css";
import List from "./tutorial/05-leverage-javascript/starter/List";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h2>Leverage JavaScript</h2>
      <List />
    </div>
  );
}

export default App;
