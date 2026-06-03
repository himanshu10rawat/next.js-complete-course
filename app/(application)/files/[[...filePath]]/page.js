import Link from "next/link";

export const metadata = {
  title: {
    absolute: "My Files",
  },
};

export default async function File({ params }) {
  const { filePath } = await params;
  return (
    <>
      <h1 style={{ margin: "0" }}>Files: /{filePath?.join("/")}</h1>
      <Link href={"/"}>Home</Link>
    </>
  );
}
