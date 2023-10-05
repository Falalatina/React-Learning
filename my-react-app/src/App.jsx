import { useState } from "react";
import "./App.css";

import Starter from "./tutorial/11-performance/starter/02-lower-state-challenge";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Starter />
    </div>
  );
}

export default App;
