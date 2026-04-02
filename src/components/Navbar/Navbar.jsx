import { NavLink } from "react-router-dom";

const Navbar = ({ links = [], cartCount = 0, onOpenCart = () => {} }) => {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/75 backdrop-blur-lg dark:border-slate-700/70 dark:bg-slate-900/80">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <NavLink
          to="/"
          className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold tracking-wide text-white shadow-sm transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300"
        >
          Mi App
        </NavLink>

        <div className="flex flex-1 items-center justify-end gap-2 overflow-x-auto whitespace-nowrap">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-slate-900 text-white shadow-sm dark:bg-slate-100 dark:text-slate-900"
                    : "bg-white/70 text-slate-700 ring-1 ring-slate-200 hover:bg-slate-100 hover:text-slate-900 dark:bg-slate-800/80 dark:text-slate-200 dark:ring-slate-700 dark:hover:bg-slate-700 dark:hover:text-slate-100"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <button
            type="button"
            onClick={onOpenCart}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300"
          >
            Carro
            <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs font-semibold dark:bg-slate-900/15">
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar