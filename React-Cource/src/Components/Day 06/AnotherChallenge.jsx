import { useEffect, useState } from "react";

function Task() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  useEffect(() => {
    // console.log("Component Mounted/Rendered");
    // console.log("Name Change", name);

    //profile update when any dependency change
    console.log("Profile Updated");
  }, [name, age]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Checking user activity...");
    }, 2000);

    return () => {
      clearInterval(interval);
      console.log("Cleanup done");
    };
  }, []);

  return (
    <>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Age"
        value={age}
        style={{ marginLeft: "10px" }}
        onChange={(e) => setAge(e.target.value)}
      />
    </>
  );
}
export default Task;
