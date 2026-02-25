import { useState, useEffect } from "react";

function AutoCounter() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  // Effect 1: Sync count with page title
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  // Effect 2: Auto-increment counter
  useEffect(() => {
    if (!isRunning) return;

    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Cleanup
    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);
  // Toggle Start / Pause
  function handleToggle() {
    setIsRunning((prev) => !prev);
  }

  // Reset Counter
  function handleReset() {
    setCount(0);
    setIsRunning(false);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Count: {count}</h1>

      <button onClick={handleToggle}>{isRunning ? "Pause" : "Start"}</button>

      <button onClick={() => setCount(count + 1)}>Increase</button>

      <button
        onClick={() => setIsRunning(false)}
        style={{ marginLeft: "10px" }}
      >
        Stop Auto Counter
      </button>
      <button onClick={handleReset} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
}

export default AutoCounter;
