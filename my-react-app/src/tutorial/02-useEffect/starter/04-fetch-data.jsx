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
        console.log(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return <h2>fetch data example</h2>;
};
export default FetchData;
