import { cookies } from "next/headers";

export default async function Comments() {
  cookies();
  await new Promise((resolve) => setTimeout(resolve, 15000));
  return <div>This is comments page</div>;
}
