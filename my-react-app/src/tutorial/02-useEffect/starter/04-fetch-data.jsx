import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  //console.log(fetch(url));

  // fetch(url)
  //   .then((resp) => resp.json())
  //   .then((data) => console.log(data))
  //   .catch((err) => console.log(err));

  // const getTours = async () => {
  //   try {
  //     const resp = await fetch(url);
  //     const data = await resp.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // getTours();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          // console.log(user);
          return (
            <li key={id} style={{ position: "relative" }}>
              <img src={avatar_url} alt={login} />
              <div>
                <h3>{login}</h3>
                <a href={html_url}>Profile</a>
              </div>
              <button
                style={{ position: "absolute", right: "0" }}
                className="btn"
                type="button"
                onClick={() => {
                  const newUsers = users.filter((user) => user.id !== id);
                  setUsers(newUsers);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;
