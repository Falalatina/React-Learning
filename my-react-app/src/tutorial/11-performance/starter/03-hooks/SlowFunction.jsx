import React from "react";

const SlowFunction = () => {
  let value = 0;
  for (let i = 0; i <= 100000000; i++) {
    value += 1;
  }
  return value;
};

export default SlowFunction;
