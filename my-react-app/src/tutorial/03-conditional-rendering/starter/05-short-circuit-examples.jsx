import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>{name || "default value"}</h2>
      <h1>-------------</h1>
      <h2>{text || "default value"}</h2>
      <h1>-------------</h1>
      {user && (
        <div>
          <h2>whatever</h2>
          <h2>{user.name}</h2>
        </div>
      )}
      <h1>-------------</h1>
      {user && <SomeComponent name={user.name} />}
    </div>
  );
};

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h2>shakeandbake</h2>
      <h2>{name}</h2>
    </div>
  );
};

export default ShortCircuitExamples;
