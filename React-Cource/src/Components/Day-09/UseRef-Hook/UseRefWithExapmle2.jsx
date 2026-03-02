import { useRef } from "react";

function Example2() {
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current += 1;
    console.log("Clicked: ", countRef.current);
  };

  return (
    <div>
      <button onClick={handleClick} style={{ border: "1px solid" }}>
        Click ME
      </button>
    </div>
  ); //Important: Even if value changes, UI will NOT update.Because: useRef does NOT trigger re-render.
}
export default Example2;
