import { useRef } from "react";

function FocusCounter() {
  // Create a ref to store focus count
  const focusCount = useRef(0);

  // Create ref for input element (optional but good practice)
  const inputRef = useRef(null);

  const handleFocus = () => {
    // Update ref value
    focusCount.current += 1;
    console.log("Input focused times:", focusCount.current);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Focus Counter (No Re-render)</h2>

      <input
        ref={inputRef}
        type="text"
        onFocus={handleFocus}
        placeholder="Click here multiple times"
        style={{ padding: "10px", fontSize: "16px" }}
      />
    </div>
  );
}

export default FocusCounter;
