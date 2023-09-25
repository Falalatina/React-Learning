import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const fakeId = Date.now();
    const newUser = { id: fakeId, name };
    const updateList = [...list, newUser];
    setList(updateList);

    setName("");
  };

  const handleName = (e) => {
    //console.log(e.target.value);
    setName(e.target.value);
  };

  const deletePerson = (id) => {
    const updateList = list.filter((person) => person.id !== id);
    setList(updateList);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={handleName}
          />
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
