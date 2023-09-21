import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);
  const updateVal = () => {
    setValue(value + 1);
  };

  return <h2>Val is: {value}</h2>;
};

export default UseStateGotcha;
