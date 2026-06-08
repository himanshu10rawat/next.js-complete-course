import Comments from "@/components/Comments";
import Likes from "@/components/Likes";
import Loading from "@/components/Loading";
import Views from "@/components/Views";
import { Suspense } from "react";

export const metadata = {
  title: "about",
};

export default function About() {
  console.log("About Page");

  return (
    <>
      <h1>This is about page</h1>
      <Suspense fallback={<Loading>Views...</Loading>}>
        <Views />
      </Suspense>
      <Suspense fallback={<Loading>Likes...</Loading>}>
        <Likes />
      </Suspense>
      <Suspense fallback={<Loading>Comments...</Loading>}>
        <Comments />
      </Suspense>
    </>
  );
}
