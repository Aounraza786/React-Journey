import { useState } from "react";

function DarkAndLightTheme() {
  console.log("Component Rendered");
  const [dark, setdark] = useState(true);
  const pageStyle = {
    backgroundColor: dark ? "#121212" : "#ffffff",
    color: dark ? "#ffffff" : "#000000",
    padding: "20px",
  };
  return (
    <div style={pageStyle}>
      <h1>Current Mode: {dark ? "Dark" : "Light"}</h1>
      <button
        onClick={() => {
          setdark(!dark);
        }}
      >
        {dark ? "Switch to Light" : "Switch to Dark"}
      </button>
    </div>
  );
}
export default DarkAndLightTheme;
