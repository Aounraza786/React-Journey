function Button({ text, backgroundColor, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        style={{
          backgroundColor,
          color: "white",
          padding: "10px 15px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        {text}
      </button>
    </>
  );
}
export default Button;
