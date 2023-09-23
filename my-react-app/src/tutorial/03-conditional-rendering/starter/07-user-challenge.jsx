import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);

  const logIn = (isLogged) => {
    if (isLogged) {
      setUser({ name: "Susan" });
    } else {
      setUser(null);
    }
  };

  return (
    <div>
      {user ? <h4>Hi {user.name}</h4> : <h4>Please login</h4>}
      <button
        type="button"
        className="btn"
        onClick={() => {
          setIsLogged(!isLogged);
          logIn(!isLogged);
        }}
      >
        {isLogged ? "LogOut" : "LogIn"}
      </button>
    </div>
  );
};

export default UserChallenge;
