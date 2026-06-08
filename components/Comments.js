export default async function Comments() {
  await new Promise((resolve) => setTimeout(resolve, 15000));
  return <div>This is comments page</div>;
}
