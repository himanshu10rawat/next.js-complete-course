import Service from "@/components/Service";
import ServicesList from "@/components/ServicesList";

export default function page() {
  const servicesList = [
    "Web Development",
    "Mobile App Development",
    "Consulting Services",
    "Digital Marketing",
  ];
  return (
    <>
      <h1>This is services page</h1>
      <ServicesList>
        {servicesList.map((singleService) => (
          <Service key={singleService} serviceItem={singleService} />
        ))}
      </ServicesList>
    </>
  );
}
