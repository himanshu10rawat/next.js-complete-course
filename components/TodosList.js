export default async function TodosList() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5",
  );

  const todos = await response.json();

  return (
    <>
      {todos.map(({ id, title, completed }) => (
        <div key={id} style={{ display: "flex", gap: "0.5rem" }}>
          <input type="checkbox" checked={completed} readOnly />
          <p>{title}</p>
        </div>
      ))}
    </>
  );
}
