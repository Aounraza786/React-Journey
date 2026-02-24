import { useState } from "react";

function FormVlidation() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    let isValid = true;

    if (email.trim() === "") {
      setEmailError("Email is requires");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (password.trim() === "") {
      setPasswordError("Password is requires");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (isValid) {
      alert("Form Submit Successfully");
      console.log({ email, password });
    }
  }

  return (
    <form onSubmit={handleSubmit} action="submit">
      <h3>Login</h3>
      <input
        type="text"
        value={email}
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      {emailError && <p style={{ color: "red" }}>{emailError}</p>}
      <input
        type="password"
        style={{ marginLeft: "5px" }}
        value={password}
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}

      <button type="submit" style={{ marginLeft: "5px", border: "1px solid" }}>
        Login
      </button>
    </form>
  );
}
export default FormVlidation;
