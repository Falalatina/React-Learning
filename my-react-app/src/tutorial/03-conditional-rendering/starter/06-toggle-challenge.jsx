import { useState } from "react";

const ToggleChallenge = () => {
  const [click, setClick] = useState(false);

  return (
    <div>
      {click ? <Element /> : <div> :( </div>}

      <button
        type="button"
        className="btn"
        onClick={() => {
          setClick(!click);
          // setTimeout(() => {
          //   setClick(!click);
          // }, 2000);
        }}
      >
        {click ? "Clicked" : "Click me"}
      </button>
      {click && <Alert />}
    </div>
  );
};

const Alert = () => {
  return <div className="alert alert-danger">Happy Happy Happy</div>;
};

const Element = () => {
  return <div>{":)"}</div>;
};

export default ToggleChallenge;
