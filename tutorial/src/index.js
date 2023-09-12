import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    author: "Stephen King",
    title: "Holly",
    img: "https://m.media-amazon.com/images/I/417kSOgt4aL._SX325_BO1,204,203,200_.jpg",
    id: 1,
  },
  {
    author: "Arthur C. Brooks & Oprah Winfrey",
    title: "Build the Life You Want",
    img: "./images/book-2.jpg",
    id: 2,
  },
  {
    author: "Keila Shaheen",
    title: "The Shadow Work Journal",
    img: "./images/book-3.jpg",
    id: 3,
  },
];

const BookList = () => {
  return (
    <section className="bookList">
      {books.map((book) => {
        const { img, title, author, id } = book;
        return <Book img={img} title={title} author={author} key={id} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author, children } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
