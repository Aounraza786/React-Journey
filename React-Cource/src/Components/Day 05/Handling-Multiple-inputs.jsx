import { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>SignUp (Handling Multiple Inputs) </h3>
      <input
        name="name"
        type="text"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        name="email"
        type="text"
        placeholder="Enter Email"
        style={{ marginLeft: "5px" }}
        value={formData.email}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Enter Password"
        style={{ marginLeft: "5px" }}
        value={formData.password}
        onChange={handleChange}
      />
      <input
        name="gender"
        type="text"
        placeholder="Enter Gender"
        style={{ marginLeft: "5px" }}
        value={formData.gender}
        onChange={handleChange}
      />

      <button type="submit" style={{ marginLeft: "5px", border: "1px solid" }}>
        Sign Up
      </button>
    </form>
  );
}
export default Signup;
