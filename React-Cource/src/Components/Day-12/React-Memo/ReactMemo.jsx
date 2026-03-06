import { useState } from "react";
import ReactMNemoPart02 from "./ReactMemoPart02";
function ReactMemo() {
  const [count, setCount] = useState(0);

  const toggleIncrement = () => {
    setCount(() => count + 1);
  };
  return (
    <>
      <p>{count}</p>
      <button onClick={toggleIncrement}>Increase</button>
      <ReactMNemoPart02 />
    </>
  );
}
export default ReactMemo;
