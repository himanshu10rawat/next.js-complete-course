import Link from "next/link";
import PageComponent from "../_components/page";

export default function Home() {
  return (
    <>
      <h1 style={{ margin: "0" }}>This is home/root page</h1>
      <PageComponent />
      <div>
        <Link href={"/about"}>About</Link>
      </div>
      <div>
        <Link href={"/services"}>Services</Link>
      </div>
      <div>
        <Link href={"/blogs"}>Blogs</Link>
      </div>
      <div>
        <Link href={"/files"}>Files</Link>
      </div>
    </>
  );
}
