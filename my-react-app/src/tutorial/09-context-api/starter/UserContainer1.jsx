import React from "react";
import { useAppContext } from "./Navbar1";

const UserContainer1 = () => {
  const { user, logout } = useAppContext;
  return (
    <div className="user-container">
      {user ? (
        <>
          <div> Hi there, {user?.name?.toUpperCase()}</div>
          <button className="btn" onClick={logout}>
            LogOut
          </button>
        </>
      ) : (
        <p>Please LogIn</p>
      )}
    </div>
  );
};

export default UserContainer1;
