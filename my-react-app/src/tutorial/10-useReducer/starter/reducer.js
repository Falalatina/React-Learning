import { CLEAR_LIST, RESTORE_LIST, REMOVE_ITEM } from "./actions";
import { data } from "../../../data";

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

export default reducer;
