// import { cookies } from "next/headers";
"use client";

import { useState } from "react";

export default function Likes() {
  const [likeCount, setLikeCount] = useState(0);
  // cookies();
  // await new Promise((resolve) => setTimeout(resolve, 10000));
  return (
    <>
      <h2>This is likes page</h2>
      <button type="button" onClick={() => setLikeCount((prev) => prev + 1)}>
        Like 👍 {likeCount}
      </button>
    </>
  );
}
