import { useState } from "react";

function ControlledComponents() {
  const [name, setname] = useState("");

  return (
    <>
      <input
        type="text"
        value={name}
        placeholder="Enter Name"
        onChange={(e) => setname(e.target.value)}
      />
      <p>Hello {name}</p>
    </>
  );
}
export default ControlledComponents;
