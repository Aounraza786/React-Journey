import { useRef, useState } from "react";

function RealWorldExample() {
  const [time, setTime] = useState(0);
  const ref = useRef(null);

  const StartTime = () => {
    ref.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const StopTimer = () => {
    clearInterval(ref.current);
  };

  return (
    <div>
      <h3>{time}</h3>
      <button onClick={StartTime}>Start</button>
      <button onClick={StopTimer}>Stop</button>
    </div>
  );
}
export default RealWorldExample;
