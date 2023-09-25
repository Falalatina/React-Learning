import React from "react";
import { people } from "../../../data";

const List = () => {
  return (
    <div>
      {people.map((prop) => {
        const { name } = prop;
        return (
          <div>
            <h1>{name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default List;
