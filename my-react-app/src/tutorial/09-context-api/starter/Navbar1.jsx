import React, { useState } from "react";
import NavLinks1 from "./NavLinks1";

const Navbar1 = () => {
  const [user, setUser] = useState({ name: "bob" });
  const logout = () => {
    setUser(null);
  };
  return (
    <nav className="navbar">
      <h5>Context Api</h5>
      <NavLinks1 user={user} logout={logout} />
    </nav>
  );
};

export default Navbar1;
