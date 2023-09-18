import React from "react";

const ErrorExample = () => {
  let count = 0;

  const addVall = () => {
    count++;
    console.log(count);
  };
  return (
    <>
      <h1>Value is: {count}</h1>
      <button className="btn" type="button" onClick={addVall}>
        Add
      </button>
    </>
  );
};

export default ErrorExample;
