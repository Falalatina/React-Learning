import { useState } from "react";
import "./App.css";

import Starter from "./tutorial/06-forms/starter/02-user-challenge";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Starter />
    </div>
  );
}

export default App;
