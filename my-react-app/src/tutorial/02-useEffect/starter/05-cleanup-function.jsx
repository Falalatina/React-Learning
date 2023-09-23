import { useState, useEffect } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button
        type="button"
        className="btn"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toogle
      </button>
      <div>{toggle && <SecondComponent />}</div>
    </div>
  );
};

const SecondComponent = () => {
  useEffect(() => {
    console.log("hmmmm, intyeresting");
    const intId = setInterval(() => {
      console.log("hi im interval");
    }, 1000);
    return () => {
      clearInterval(intId);
    };
  }, []);

  return <h2>Hello? o.o </h2>;
};

export default CleanupFunction;
