import React from "react";

const UserContainer1 = ({ user, logout }) => {
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
