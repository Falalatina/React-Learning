import { useState } from "react";
import "./App.css";

import Starter from "./tutorial/11-performance/starter/01-lower-state";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Starter />
    </div>
  );
}

export default App;
