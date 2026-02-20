function Footer({ text }) {
  return (
    <footer
      style={{
        background: "Gray",
        color: "black",
        padding: "10px",
        margingTop: "20px",
      }}
    >
      <p>{text}</p>
    </footer>
  );
}
export default Footer;
