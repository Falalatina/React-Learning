import { useState } from "react";

const UseStateBasics = () => {
  //let count = 0;
  // console.log(useState(count, addVal));

  // const val = useState("hello")[0];
  // console.log(val);
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Val is: {count}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default UseStateBasics;
