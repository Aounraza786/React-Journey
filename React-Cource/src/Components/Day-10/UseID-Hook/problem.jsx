import { useId } from "react";

function CustomInput({ label, name, error, ...props }) {
  const id = useId();

  return (
    <div style={{ marginBottom: "1rem" }}>
      <label htmlFor={id}>{label}</label>

      <input
        id={id}
        name={name}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={error ? "true" : "false"}
        {...props}
      />

      {error && (
        <p id={`${id}-error`} style={{ color: "red" }}>
          {error}
        </p>
      )}
    </div>
  );
}

export default CustomInput;
