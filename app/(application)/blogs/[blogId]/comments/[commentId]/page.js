export default async function Comment({ params }) {
  const { blogId, commentId } = await params;

  return (
    <h1 style={{ margin: "0" }}>
      Comment{" "}
      <span style={{ color: "blueviolet", fontStyle: "italic" }}>
        {commentId}
      </span>{" "}
      on <span style={{ color: "orangered" }}>{blogId}</span> page!
    </h1>
  );
}
