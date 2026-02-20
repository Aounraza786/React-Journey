import ServiceCard from "./ServiceCard";
function ServiceSection({ services }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          title={service.title}
          info={service.info}
        />
      ))}
    </div>
  );
}
export default ServiceSection;
