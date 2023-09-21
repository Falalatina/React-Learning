import { useState } from "react";
import "./App.css";

import { data } from "./data";

import Starter from "./tutorial/01-useState/starter/04-useState-object";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Starter key={data.id} />
    </div>
  );
}

export default App;
