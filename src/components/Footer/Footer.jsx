

const GITHUB_URL = "https://github.com/luisgm21";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200/70 bg-white/75 backdrop-blur-lg sticky bottom-0">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <span className="text-sm font-semibold tracking-wide text-slate-900">Mi App</span>

        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-slate-500 transition hover:text-slate-900"
        >
          GitHub
        </a>
      </div>

      <div className="border-t border-slate-200/70 py-2 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} · Todos los derechos reservados
      </div>
    </footer>
  );
}

export default Footer