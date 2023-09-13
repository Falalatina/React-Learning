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
      <EventExample />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const EventExample = () => {
  const handleFormInput = () => {
    console.log("handle from input");
  };
  const handleButtonClick = () => {
    alert("handle from button");
  };
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button onClick={handleButtonClick}>click me</button>
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
