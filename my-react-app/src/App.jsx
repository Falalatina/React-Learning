import { useState } from "react";
import "./App.css";

import Starter from "./tutorial/11-performance/starter/03-hooks";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Starter />
    </div>
  );
}

export default App;
