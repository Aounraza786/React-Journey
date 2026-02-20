import Button from "./Button";
function ProfileCard({
  name,
  age,
  profession,
  image,
  isOnline,
  onButtonClick,
}) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        width: "250px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
        }}
      />
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>{profession}</p>
      <p style={{ color: isOnline ? "green" : "red" }}>
        {isOnline ? "Online" : "Offline"}
      </p>
      <Button text="Click Me" backgroundColor="blue" onClick={onButtonClick} />
    </div>
  );
}
export default ProfileCard;
