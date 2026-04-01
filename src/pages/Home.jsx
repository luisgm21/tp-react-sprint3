import { useAppContext } from "../context/AppContext";
import MovieCard from "../components/featureMovies/MovieCard";
import { MOVIES } from "../data/movies";

export default function Home() {
  const { addToCart } = useAppContext();

  return (
    <section className="mx-auto w-full max-w-6xl space-y-8">
      <div className="space-y-2">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-400">
          Cartelera
        </p>
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          Peliculas destacadas
        </h1>
        <p className="max-w-2xl text-sm text-slate-600 sm:text-base">
          Explora una seleccion de peliculas con una presentacion visual lista para conectar al carrito mas adelante.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {MOVIES.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onAddToCart={addToCart} />
        ))}
      </div>
    </section>
  );
}
