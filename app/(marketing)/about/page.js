import Link from "next/link";

export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <>
      <h1 style={{ margin: "0" }}>This is about page.</h1>
      <Link href={"/"}>Home</Link>
    </>
  );
}
