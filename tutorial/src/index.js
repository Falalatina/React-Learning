import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const BookList = () => {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
    </section>
  );
};
//1:47
const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/417kSOgt4aL._SX325_BO1,204,203,200_.jpg"
    alt="Holly"
  />
);
const Title = () => <h2>Holly</h2>;
const Author = () => {
  return <h4>Stephen King</h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
