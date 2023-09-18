import { useState } from "react";
import "./App.css";

import Starter from "./tutorial/01-useState/starter/01-error-example";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Starter />
    </div>
  );
}

export default App;
