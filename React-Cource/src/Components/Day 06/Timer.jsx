import { useEffect, useState } from "react";

function ReactUseEffect() {
  const [time, SetTime] = useState(0);
  const [date, SetDate] = useState(0);

  useEffect(() => {
    setInterval(() => {
      let updatedTime = new Date();
      SetTime(updatedTime.toLocaleTimeString());
      SetDate(updatedTime.toLocaleDateString());
    }, 1000);
  });

  return (
    <>
      <h3>Time: {time}</h3>
      <h3>Date: {date}</h3>
    </>
  );
}
export default ReactUseEffect;
