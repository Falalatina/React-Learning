import React from "react";
import { data } from "../../../data";
import { useState, useReducer } from "react";

const CLEAR_LIST = "CLEAR_LIST";
const RESTORE_LIST = "RESTORE_LIST";
const REMOVE_ITEM = "REMOVE_ITEM";

const defaultState = {
  people: data,
  isLoading: false,
};

const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }
  if (action.type === RESTORE_LIST) {
    return { ...state, people: data };
  }
  if (action.type === REMOVE_ITEM) {
    const people = state.people;
    let newPeople = people.filter((person) => person.id !== action.payload.id);
    return { ...state, people: newPeople };
  }
  throw new Error(`No matching "${action.type}" - action type `);
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
