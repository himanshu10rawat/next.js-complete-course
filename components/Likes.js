export default async function Likes() {
  await new Promise((resolve) => setTimeout(resolve, 10000));
  return <div>This is likes page</div>;
}
