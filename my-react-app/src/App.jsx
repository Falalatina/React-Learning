import { useState } from "react";
import "./App.css";

import { data } from "./data";

import Starter from "./tutorial/03-conditional-rendering/starter/01-multiple-returns-basics";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Starter key={data.id} />
    </div>
  );
}

export default App;
