const CartModal = ({
  isOpen = false,
  items = [],
  onClose = () => {},
  onRemoveItem = () => {},
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/45 p-4 backdrop-blur-sm">
      <div className="w-full max-w-2xl overflow-hidden rounded-3xl border border-slate-200/70 bg-white/90 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-200/70 px-6 py-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
              Tu seleccion
            </p>
            <h2 className="text-2xl font-semibold text-slate-900">Carro</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200"
          >
            Cerrar
          </button>
        </div>

        <div className="max-h-[70vh] space-y-4 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-6 py-12 text-center">
              <p className="text-lg font-medium text-slate-700">Tu carro esta vacio</p>
              <p className="mt-2 text-sm text-slate-500">
                Agrega peliculas desde la cartelera para verlas aqui.
              </p>
            </div>
          ) : (
            items.map((item, index) => (
              <article
                key={`${item.id}-${index}`}
                className="flex items-center gap-4 rounded-2xl border border-slate-200/70 bg-white px-4 py-3 shadow-sm"
              >
                <img
                  src={item.poster}
                  alt={`Poster de ${item.title}`}
                  className="h-20 w-14 rounded-lg object-cover"
                />
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-base font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{item.director}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="rounded-full bg-slate-900/10 px-2.5 py-1 text-xs font-medium text-slate-700">
                      {item.genre}
                    </span>
                    <span className="text-xs font-medium text-amber-700">⭐ {item.rating}</span>
                    <span className="text-xs font-semibold text-emerald-700">${item.price}</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => onRemoveItem(item.id)}
                  className="rounded-full bg-rose-50 px-3 py-2 text-sm font-medium text-rose-700 transition hover:bg-rose-100"
                >
                  Quitar
                </button>
              </article>
            ))
          )}
        </div>

        <div className="flex items-center justify-between border-t border-slate-200/70 bg-slate-50/70 px-6 py-4">
          <div className="space-y-0.5">
            <p className="text-sm text-slate-500">
              Total de peliculas: <span className="font-semibold text-slate-900">{items.length}</span>
            </p>
            <p className="text-sm text-slate-500">
              Total a pagar: <span className="font-semibold text-emerald-700">${items.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</span>
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Seguir explorando
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;