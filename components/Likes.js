import { cookies } from "next/headers";

export default async function Likes() {
  cookies();
  await new Promise((resolve) => setTimeout(resolve, 10000));
  return <div>This is likes page</div>;
}
