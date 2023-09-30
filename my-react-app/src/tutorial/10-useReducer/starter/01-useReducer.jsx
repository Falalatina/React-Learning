import React from "react";
import { data } from "../../../data";
import { useState } from "react";
const ReducerBasics = () => {
  const [people, setPeople] = React.useState(data);
  const [isTherePeople, setIsTherePeople] = useState(true);

  const restoreList = () => {
    setPeople(data);
    setIsTherePeople(true);
  };

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const deleteAll = () => {
    setPeople([]);
    setIsTherePeople(false);
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {isTherePeople ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={deleteAll}
        >
          clear items
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={restoreList}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
