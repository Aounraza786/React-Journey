function HeroSection({ heading, description }) {
  return (
    <section style={{ padding: "15px", textAlign: "center" }}>
      <h3>{heading}</h3>
      <p>{description}</p>
    </section>
  );
}
export default HeroSection;
