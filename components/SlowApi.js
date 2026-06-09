export default async function SlowApi() {
  const slowResponse = await fetch("https://procodrr.vercel.app/?sleep=2000");
  const data = await slowResponse.json();
  return <h2>{JSON.stringify(data)}</h2>;
}
