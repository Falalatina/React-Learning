import React from "react";
import UserContainer1 from "./UserContainer1";

const NavLinks1 = () => {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <a href="#"> Home</a>
        </li>
        <li>
          <a href="#"> About</a>
        </li>
      </ul>
      <UserContainer1 />
    </div>
  );
};

export default NavLinks1;
