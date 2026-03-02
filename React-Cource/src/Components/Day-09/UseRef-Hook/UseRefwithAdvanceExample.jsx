import { useRef, useState, useEffect } from "react";

function AdvanceExample() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <div>
      <h4>Current: {count}</h4>
      <h4>Previous: {prevCount.current}</h4>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div> //i) prevCount stores old value ii) useEffect updates it AFTER render iii) So next render shows previous value
  );
}
export default AdvanceExample;
