// import next from "next";

// export const dynamicParams = false;
// export const revalidate = 5;

// export async function generateStaticParams() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const data = await response.json();
//   console.log(data);

//   return data?.map(({ id }) => ({ blogID: `${id}` }));
// }

export default async function Blog({ params }) {
  const { blogID } = await params;
  console.log("blogID:", blogID);

  // const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
  //   next: { revalidate: 5 },
  // });
  // const data = await response.json();
  // console.log(data);

  return <h1>Page Id: {blogID}</h1>;
}
