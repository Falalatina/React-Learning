import React from "react";
import ReactDOM from "react-dom/client";

function Greetings() {
  return (
    <div>
      <h2>Hello im first component</h2>
    </div>
  );
  // return React.createElement("h2", {}, "hello");
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greetings />);
