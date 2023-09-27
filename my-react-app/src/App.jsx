import { useState } from "react";
import "./App.css";

import Starter from "./tutorial/07-useRef/starter/01-useRef-basics";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Starter />
    </div>
  );
}

export default App;
