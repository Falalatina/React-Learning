import { Person } from "./Person";
import React from "react";
import { people } from "../../../data";

const List = () => {
  return (
    <div>
      {people.map((person) => {
        const { name, id } = person;
        return <Person key={name} {...person} />;
      })}
    </div>
  );
};

export default List;
