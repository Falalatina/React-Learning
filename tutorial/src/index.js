import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const BookList = () => {
  return (
    <section className="bookList">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />

      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      >
        <p> Bla bla bla.</p>
        <button>Click me</button>
      </Book>

      <Book
        author={thirdBook.author}
        title={thirdBook.title}
        img={thirdBook.img}
      />
    </section>
  );
};

const firstBook = {
  author: "Stephen King",
  title: "Holly",
  img: "https://m.media-amazon.com/images/I/417kSOgt4aL._SX325_BO1,204,203,200_.jpg",
};

const secondBook = {
  author: "Arthur C. Brooks & Oprah Winfrey",
  title: "Build the Life You Want",
  img: "./images/book-2.jpg",
};

const thirdBook = {
  author: "Keila Shaheen",
  title: "The Shadow Work Journal",
  img: "./images/book-3.jpg",
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
