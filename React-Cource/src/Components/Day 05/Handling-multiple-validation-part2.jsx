import { useState } from "react";

function Signup01() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
  });

  const [error, setErrors] = useState({});
  const validationRules = {
    name: (value) => {
      if (!value) return "Name Is Required";
      return "";
    },
    email: (value) => {
      if (!value) return "Email Is Required";
      if (!value.includes("@")) return "Invalid Email";
      return "";
    },
    password: (value) => {
      if (!value) return "Password Is Required";
      if (!value.length < 6) return "Minium 6 Character Required";
      return "";
    },
    gender: (value) => {
      if (!value) return "Gender Is Required";
      return "";
    },
  };
  function validate(name, value) {
    return validationRules[name] ? validationRules[name](value) : "";
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({
      ...prev,
      [name]: validate(name, value),
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    let newError = {};
    let isValid = true;
    for (const key in formData) {
      const error = validate(key, formData[key]);
      if (error) {
        newError[key] = error;
        isValid = false;
      }
    }
    setErrors(newError);
    if (isValid) {
      alert("SignUp Successfully");
    }
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>SignUp (Handling Multiple Inputs includes Validation) </h3>
      <input
        name="name"
        type="text"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
      />
      {error.name && <p style={{ color: "red" }}>{error.name}</p>}
      <input
        name="email"
        type="text"
        placeholder="Enter Email"
        style={{ marginLeft: "5px" }}
        value={formData.email}
        onChange={handleChange}
      />
      {error.email && <p style={{ color: "red" }}>{error.email}</p>}
      <input
        name="password"
        type="password"
        placeholder="Enter Password"
        style={{ marginLeft: "5px" }}
        value={formData.password}
        onChange={handleChange}
      />
      {error.password && <p style={{ color: "red" }}>{error.password}</p>}
      <input
        name="gender"
        type="text"
        placeholder="Enter Gender"
        style={{ marginLeft: "5px" }}
        value={formData.gender}
        onChange={handleChange}
      />
      {error.gender && <p style={{ color: "red" }}>{error.gender}</p>}
      <button type="submit" style={{ marginLeft: "5px", border: "1px solid" }}>
        Sign Up
      </button>
    </form>
  );
}
export default Signup01;
