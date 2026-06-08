export default async function Views() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return <div>This is views page</div>;
}
