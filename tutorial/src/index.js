import React from "react";
import ReactDOM from "react-dom/client";

function Greetings() {
  return (
    <React.Fragment>
      <Person />
      <Message />
    </React.Fragment>
  );
  // return React.createElement("h2", {}, "hello");
}

const Person = () => <h1>John doe</h1>;
const Message = () => {
  return <p>this is message</p>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greetings />);
