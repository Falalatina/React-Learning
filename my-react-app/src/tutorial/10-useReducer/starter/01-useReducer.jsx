import React from "react";
import { data } from "../../../data";
import { useState, useReducer } from "react";
import { CLEAR_LIST, RESTORE_LIST, REMOVE_ITEM } from "./actions";
import reducer from "./reducer";

const defaultState = {
  people: data,
  isLoading: false,
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const restoreList = () => {
    dispatch({ type: RESTORE_LIST });
    // setPeople(data);
    // setIsTherePeople(true);
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
    // setPeople(newPeople);
  };

  const deleteAll = () => {
    dispatch({ type: CLEAR_LIST });
    // setPeople([]);
    // setIsTherePeople(false);
  };
  //console.log(state);
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length > 1 ? (
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
