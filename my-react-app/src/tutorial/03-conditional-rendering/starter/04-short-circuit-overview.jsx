import { useEffect, useState } from "react";

const ShortCircuitOverview = () => {
  //falsy
  const [text, setText] = useState("");
  //truthy
  const [name, setName] = useState("Susan");

  let btnText = " Text is true";
  return (
    <div>
      <h4>Falsy Or: {text || "text is falsy"}</h4>
      <h4>Falsy And: {text && "text is truthy"}</h4>
      <h4>Truthy Or: {name || "text is falsy"}</h4>
      <h4>Truthy And: {name && "text is truthy"}</h4>
      <button
        type="button"
        className="btn"
        onClick={() => {
          setText("im truthy");
        }}
      >
        {btnText}
      </button>
    </div>
  );
};
export default ShortCircuitOverview;
