export default function Service({ serviceItem }) {
  if (typeof window === "undefined") {
    console.log("This is server site rendering");
  } else {
    console.log("This is client site rendering");
  }
  return <div className="service-item">{serviceItem}</div>;
}
