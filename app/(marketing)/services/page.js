import Link from "next/link";

export default function Services() {
  return (
    <>
      <h1 style={{ margin: "0" }}>This is services page.</h1>
      <Link href={"/"}>Home</Link>
      <div>
        <h2>These are our services.</h2>
        <p>
          <Link href={"/services/web-dev"}>Web/App Development</Link>
        </p>
        <p>
          <Link href={"/services/seo-dev"}>SEO Development</Link>
        </p>
      </div>
    </>
  );
}
