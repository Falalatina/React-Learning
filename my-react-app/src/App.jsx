import { useState } from "react";
import "./App.css";

import Starter from "./tutorial/06-forms/starter/04-other-inputs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Starter />
    </div>
  );
}

export default App;
