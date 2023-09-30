import React, { useState, createContext, useContext } from "react";
import NavLinks1 from "./NavLinks1";

export const NavbarContext = createContext();

//custom hook

export const useAppContext = () => useContext(NavbarContext);

const Navbar1 = () => {
  const [user, setUser] = useState({ name: "bob" });
  const logout = () => {
    setUser(null);
  };

  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5>Context Api</h5>
        <NavLinks1 />
      </nav>
    </NavbarContext.Provider>
  );
};

export default Navbar1;
