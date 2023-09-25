import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [list, setList] = useState(data);

  const deletePerson = (id) => {
    const newList = list.filter((person) => person.id !== id);
    setList(newList);
  };

  return (
    <div>
      <form className="form">
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input type="text" className="form-input" id="name" />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {list.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3>{name}</h3>
              <button
                type="button"
                className="btn "
                style={{ margin: "1rem" }}
                onClick={() => deletePerson(id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
