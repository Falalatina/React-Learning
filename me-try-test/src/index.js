import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pugs = [
  {
    id: 1,
    img: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2016/08/27105749/Pug-sitting-in-the-grass-looking-up-at-the-viewer-500x486.jpg",
    name: "Niunia",
    position: "Senior",
  },
  {
    id: 2,
    img: "https://www.purina.com.au/-/media/project/purina/main/breeds/dog/mobile/dog_pugs_mobile.jpg?h=300&la=en&w=375&hash=5BF9CFC4E6FC7347E6FDA383E42D8A52",
    name: "Bobas",
    position: "Mid",
  },
  {
    id: 3,
    img: "https://media.istockphoto.com/id/454238885/pl/zdj%C4%99cie/mops-pies-szczeniak.jpg?s=612x612&w=0&k=20&c=4czl5W3pr-vn_rzPMtizMnCYgB7OlFhv84AyT5_EBkc=",
    name: "Dzidzia",
    position: "Junior",
  },
  {
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw3ayPJEbecSENdzxKCQxYOOjVAqEcrc8gEA&usqp=CAU",
    name: "Abraham",
    position: "Bottom",
  },
];

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
        {pugs.map((prop) => {
          const { img, name, position, id } = prop;
          return <Pug img={img} name={name} position={position} key={id} />;
        })}
      </section>
    </>
  );
};

const Pug = (prop) => {
  const { img, name, position, children } = prop;
  return (
    <article className="Pug">
      <img src={img} alt={name} />
      <h1>{name}</h1>
      <h2>{position}</h2>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<PugList />);
