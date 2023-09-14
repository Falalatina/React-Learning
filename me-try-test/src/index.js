import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { pugs } from "./pugs";
import Pug from "./Pug";

const styleforchoose = {
  textAlign: "center",
  backgroundColor: "white",
  fontSize: "48px",
};

const PugList = () => {
  const getId = (id) => {
    const rightPug = pugs.find((rightPug) => rightPug.id === id);
    alert(` Id: ${rightPug.id}`);
  };
  return (
    <>
      <h1 style={styleforchoose}>Choose your Pug!!</h1>

      <section className="PugList">
        {pugs.map((pug, index) => {
          return <Pug {...pug} key={pug.id} index={index} getId={getId} />;
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<PugList />);
