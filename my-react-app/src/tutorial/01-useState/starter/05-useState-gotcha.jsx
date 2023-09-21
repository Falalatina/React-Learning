import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);
  const updateVal = () => {
    setTimeout(() => {
      setValue((currentState) => {
        const newState = currentState + 1;
        return newState;
      });
    }, 3000);
  };

  return (
    <>
      <h2>Val is: {value}</h2>
      <button type="button" className="btn" onClick={updateVal}>
        Add
      </button>
    </>
  );
};

export default UseStateGotcha;
