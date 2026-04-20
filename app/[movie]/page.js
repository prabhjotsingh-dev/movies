export default function MoviePage({ params }) {
  const { movie } = params;
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Movie Details: {decodeURIComponent(movie)}</h1>
      <p className="mt-4">This page is under construction.</p>
    </div>
  );
}
