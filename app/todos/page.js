// Api call in server component

async function fetchData(url) {
  const response = await fetch(url);
  return response.json();
}

export default async function Todos() {
  const urls = [
    "https://jsonplaceholder.typicode.com/todos?_limit=5",
    "https://procodrr.vercel.app/?sleep=2000",
    "https://procodrr.vercel.app/?sleep=3000",
  ];

  const [todos, data1, data2] = await Promise.all(
    urls.map((url) => fetchData(url)),
  );

  return (
    <>
      <h1>Todos</h1>

      {todos.map(({ id, title, completed }) => (
        <div key={id} style={{ display: "flex", gap: "0.5rem" }}>
          <input type="checkbox" checked={completed} readOnly />
          <p>{title}</p>
        </div>
      ))}

      <h2>{JSON.stringify(data1)}</h2>
      <h2>{JSON.stringify(data2)}</h2>
    </>
  );
}
