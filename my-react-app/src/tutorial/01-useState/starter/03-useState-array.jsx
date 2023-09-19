import { data } from "../../../data";
import React from "react";
import { useState } from "react";

const UseStateArray = () => {
  const [people, setPerson] = useState(data);

  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPerson(newPeople);
  };
  const clearAllItems = () => {
    setPerson([]);
  };

  return (
    <section>
      <h1>useState Array Example</h1>
      <div>
        {people.map((person) => {
          const { id, name } = person;
          return (
            <section key={id}>
              <h2>{name}</h2>
              <button
                type="button"
                className="btn"
                onClick={() => removeItem(id)}
              >
                Remove
              </button>
            </section>
          );
        })}
      </div>
      <button
        type="button"
        className="btn"
        style={{ marginTop: "2rem" }}
        onClick={clearAllItems}
      >
        Clear All Items
      </button>
    </section>
  );
};

export default UseStateArray;
