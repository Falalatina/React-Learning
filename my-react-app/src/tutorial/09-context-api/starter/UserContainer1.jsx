import React from "react";

const UserContainer1 = ({ user, logout }) => {
  return (
    <div className="user-container">
      <div> Hi there, {user.name}</div>
      <button>LogOut</button>
    </div>
  );
};

export default UserContainer1;
