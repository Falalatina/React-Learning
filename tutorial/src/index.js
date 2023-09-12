import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    author: "Stephen King",
    title: "Holly",
    img: "https://m.media-amazon.com/images/I/417kSOgt4aL._SX325_BO1,204,203,200_.jpg",
  },
  {
    author: "Arthur C. Brooks & Oprah Winfrey",
    title: "Build the Life You Want",
    img: "./images/book-2.jpg",
  },
  {
    author: "Keila Shaheen",
    title: "The Shadow Work Journal",
    img: "./images/book-3.jpg",
  },
];

const BookList = () => {
  return <section className="bookList">{Book}</section>;
};

const names = ["john", "kleee", "banan"];
const newName = names.map((name) => {
  return <h1>{name}</h1>;
});

const Book = books.map((props) => {
  const { img, title, author, children } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
