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
  return (
    <>
      <h1 style={styleforchoose}>Choose your Pug!!</h1>

      <section className="PugList">
        {pugs.map((prop, index) => {
          const { img, name, position, id } = prop;
          return (
            <Pug
              img={img}
              name={name}
              position={position}
              key={id}
              index={index}
            />
          );
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<PugList />);
