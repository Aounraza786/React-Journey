function ServiceCard({ title, info }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        width: "200px",
        margin: "10px",
      }}
    >
      <h3>{title}</h3>
      <p>{info}</p>
    </div>
  );
}
export default ServiceCard;
