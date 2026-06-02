import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { blogId } = await params;
  return {
    title: `Blog ${blogId}`,
  };
}

export default async function Blog({ params }) {
  const { blogId } = await params;
  if (!/^\d+$/.test(blogId)) {
    notFound();
  }
  return (
    <>
      <h1 style={{ margin: "0" }}>Blog: {blogId}</h1>
    </>
  );
}
