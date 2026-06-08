import { cookies } from "next/headers";

export default async function Views() {
  cookies();
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return <div>This is views page</div>;
}
