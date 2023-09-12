import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const BookList = () => {
  return (
    <section className="bookList">
      <Book />
      <Book author={author} title={title} img={img} />
      <Book />
    </section>
  );
};

const author = "Stephen King";
const title = "Holly";
const img =
  "https://m.media-amazon.com/images/I/417kSOgt4aL._SX325_BO1,204,203,200_.jpg";

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
