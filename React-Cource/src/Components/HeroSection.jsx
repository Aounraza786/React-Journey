function HeroSection({ heading, description }) {
  return (
    <section style={{ padding: "15px", textAlign: "center" }}>
      <h1>{heading}</h1>
      <p>{description}</p>
    </section>
  );
}
export default HeroSection;
