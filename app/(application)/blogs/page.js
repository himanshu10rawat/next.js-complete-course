import Link from "next/link";

export const metadata = {
  title: "Blogs",
};

const Blogs = () => {
  return (
    <>
      <h1 style={{ margin: "0" }}>This is a Blogs page.</h1>
      <Link href={"/"}>Home</Link>
    </>
  );
};

export default Blogs;
