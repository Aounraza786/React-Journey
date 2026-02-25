import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
    console.log("Effect ran");
  });

  return (
    <>
      <h4>Count is: {count}</h4>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}
export default Counter;
