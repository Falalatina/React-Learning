import { useState } from "react";
import "./App.css";

import Starter from "./tutorial/10-useReducer/starter/01-useReducer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Starter />
    </div>
  );
}

export default App;
