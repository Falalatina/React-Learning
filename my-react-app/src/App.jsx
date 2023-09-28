import { useState } from "react";
import "./App.css";

import Starter from "./tutorial/09-context-api/starter/Navbar1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Starter />
    </div>
  );
}

export default App;
