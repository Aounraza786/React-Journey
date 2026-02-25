import { useState, useEffect } from "react";

function Challenge() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    document.title = `Count: ${count}`;
    console.log(`Name is: ${input}`);
  }, [count, input]);

  return (
    <>
      <h2>01 - UseEffect Challenge</h2>
      <h3>Count is: {count}</h3>
      <button
        style={{ border: "1px solid" }}
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>
      <p>Name: {input}</p>
      <input
        type="text"
        value={input} // Without this line this input will be uncontrolled
        placeholder="Enter Name"
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  );
}
export default Challenge;
