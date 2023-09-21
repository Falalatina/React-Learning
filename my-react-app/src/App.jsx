import { useState } from "react";
import "./App.css";

import { data } from "./data";

import Starter from "./tutorial/02-useEffect/starter/01-code-example.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Starter key={data.id} />
    </div>
  );
}

export default App;
