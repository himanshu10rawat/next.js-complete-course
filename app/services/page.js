import { cookies } from "next/headers";

export const metadata = {
  title: "services",
};

// export const dynamic = "auto";
// export const dynamic = "force-dynamic";
// export const dynamic = "error";
// export const dynamic = "force-static";

export default async function Services({ searchParams }) {
  // const search = await searchParams;
  // console.log("Services Page", search);

  // const cookiesData = await cookies();
  // console.log("cookiesData:", cookiesData);

  return <h1>This is services page</h1>;
}
