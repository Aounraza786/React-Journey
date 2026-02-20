import { useState } from "react";

function CounterDashboard() {
  console.log("Component Rendered");
  const [counter, setcounter] = useState(0);
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button
        style={{ border: "2px solid" }}
        onClick={() => setcounter((prev) => prev + 1)}
      >
        Increase
      </button>
      <button
        disabled={counter === 0}
        style={{ border: "2px solid", marginLeft: "5px" }}
        onClick={() => {
          setcounter((prev) => prev - 1);
        }}
      >
        Decrease
      </button>
      <button
        style={{ border: "2px solid", marginLeft: "5px" }}
        onClick={() => setcounter(0)}
      >
        Reset
      </button>
    </>
  );
}
export default CounterDashboard;
