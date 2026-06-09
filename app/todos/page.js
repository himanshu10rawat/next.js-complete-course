// Api call in server component

import SlowApi from "@/components/SlowApi";
import TodosList from "@/components/TodosList";
import { Suspense } from "react";

export default function Todos() {
  return (
    <>
      <h1>Todos</h1>
      <Suspense
        fallback={
          <div className="todos-container">
            {Array.from({ length: 5 }).map((_, index) => (
              <li key={index} className="shimmer">
                <div className="shimmer-checkbox"></div>
                <div className="shimmer-text"></div>
              </li>
            ))}
          </div>
        }
      >
        <TodosList />
      </Suspense>
      <Suspense fallback={<h2>Slow Api Loading...</h2>}>
        <SlowApi />
      </Suspense>
    </>
  );
}
