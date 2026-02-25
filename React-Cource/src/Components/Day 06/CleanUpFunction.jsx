import { useEffect, useState } from "react";

function CleanUp() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000); // Without Cleanup function this will aupdate the count by adding 2 because exact value not passibg through prev variable. so that ehy we need cleanup function

    // CleanUp

    return () => clearInterval(timer); // Now we get correct version
  }, []);

  return (
    <>
      <h3>Auto Count Score: {count}</h3>
    </>
  );
}
export default CleanUp;
