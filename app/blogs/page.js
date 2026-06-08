import Link from "next/link";

export const metadata = {
  title: "blog",
};

export default function Blogs() {
  console.log("Blogs Page");
  return (
    <>
      <h1>This is blogs page</h1>
      <div style={{ paddingBottom: "1rem" }}>
        <Link
          style={{ color: "inherit", textDecoration: "none" }}
          href="/blogs/1"
        >
          Blog 1
        </Link>
      </div>
      <div style={{ paddingBottom: "1rem" }}>
        <Link
          style={{ color: "inherit", textDecoration: "none" }}
          href="/blogs/2"
        >
          Blog 2
        </Link>
      </div>
      <div style={{ paddingBottom: "1rem" }}>
        <Link
          style={{ color: "inherit", textDecoration: "none" }}
          href="/blogs/3"
        >
          Blog 3
        </Link>
      </div>
    </>
  );
}
