import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pug1 = {
  img: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2016/08/27105749/Pug-sitting-in-the-grass-looking-up-at-the-viewer-500x486.jpg",
  name: "Niunia",
  position: "Senior",
};
const pug2 = {
  img: "https://www.purina.com.au/-/media/project/purina/main/breeds/dog/mobile/dog_pugs_mobile.jpg?h=300&la=en&w=375&hash=5BF9CFC4E6FC7347E6FDA383E42D8A52",
  name: "Bobas",
  position: "Mid",
};
const pug3 = {
  img: "https://media.istockphoto.com/id/454238885/pl/zdj%C4%99cie/mops-pies-szczeniak.jpg?s=612x612&w=0&k=20&c=4czl5W3pr-vn_rzPMtizMnCYgB7OlFhv84AyT5_EBkc=",
  name: "Dzidzia",
  position: "Junior",
};
const pug4 = {
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw3ayPJEbecSENdzxKCQxYOOjVAqEcrc8gEA&usqp=CAU",
  name: "Abraham",
  position: "Bottom",
};

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
        <Pug img={pug1.img} name={pug1.name} position={pug1.position} />
        <Pug img={pug2.img} name={pug2.name} position={pug2.position} />
        <Pug img={pug3.img} name={pug3.name} position={pug3.position} />
        <Pug img={pug4.img} name={pug4.name} position={pug4.position} />
      </section>
    </>
  );
};

const Pug = (prop) => {
  return (
    <article className="Pug">
      <img src={prop.img} alt={prop.name} />
      <h1>{prop.name}</h1>
      <h2>{prop.position}</h2>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<PugList />);
