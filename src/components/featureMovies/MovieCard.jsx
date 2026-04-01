const MovieCard = ({ movie, onAddToCart = () => {} }) => {
  if (!movie) return null;

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white/80 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={movie.poster}
          alt={`Poster de ${movie.title}`}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/25 to-transparent" />
        <button
          type="button"
          onClick={() => onAddToCart(movie)}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-lg backdrop-blur transition hover:bg-white"
        >
          Agregar al carro
        </button>
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-3 p-4 text-white">
          <div>
            <p className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-white/70">
              {movie.year}
            </p>
            <h3 className="text-lg font-semibold">{movie.title}</h3>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="whitespace-nowrap rounded-full bg-amber-300/90 px-3 py-1 text-sm font-bold text-amber-950">
              ⭐ {movie.rating}
            </span>
            <span className="whitespace-nowrap rounded-full bg-emerald-500/90 px-3 py-1 text-sm font-bold text-white">
              ${movie.price}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-3 p-4">
        <p className="text-sm text-slate-600">
          <span className="font-semibold text-slate-900">Director:</span>{" "}
          {movie.director}
        </p>
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex rounded-full bg-slate-900/10 px-3 py-1 text-xs font-medium text-slate-700">
            {movie.genre}
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
            Disponible
          </span>
        </div>
      </div>
    </article>
  );
};

export default MovieCard;
