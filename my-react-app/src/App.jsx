import { useState } from "react";
import "./App.css";

import Starter from "./tutorial/01-useState/starter/02-useState-basics";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Starter />
    </div>
  );
}

export default App;
