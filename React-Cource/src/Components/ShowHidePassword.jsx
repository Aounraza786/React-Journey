import { useState } from "react";

function ShowHidePassword() {
  console.log("Component Rendered");

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter password"
        style={{ padding: "8px" }}
      />

      <button
        onClick={() => setShowPassword((prev) => !prev)}
        style={{ marginLeft: "10px" }}
      >
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default ShowHidePassword;
