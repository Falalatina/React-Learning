import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    hobby: "pug cuddle",
  });
  const { name, age, hobby } = person;

  const displayPerson = () => {
    setPerson({
      name: "John",
      age: 28,
      hobby: "eating cakes",
    });
  };
  return (
    <>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h2>Enjoys: {hobby}</h2>
      <button type="button" className="btn" onClick={displayPerson}>
        Next
      </button>
    </>
  );
};

export default UseStateObject;
