import { useState } from "react";
import "./App.css";

import { data } from "./data";

import { Home, About } from "./tutorial/04-project-structure/starter/Pages";

// import Starter from "./tutorial/02-useEffect/starter/05-cleanup-function";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Home />
      <About />
    </div>
  );
}

export default App;
