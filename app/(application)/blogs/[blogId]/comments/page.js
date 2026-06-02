export default async function Comments({ params }) {
  const { blogId } = await params;
  return (
    <h1 style={{ margin: "0" }}>
      Comments on <span style={{ color: "orangered" }}>{blogId}</span> page!
    </h1>
  );
}
