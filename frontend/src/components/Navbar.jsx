import BookButton from "@/components/BookButton";

const Navbar = ({ ctaLabel = "Book · ₹21", ctaHref }) => (
  <nav data-testid="site-navbar" className="sticky top-0 z-40 border-b border-slate-200 bg-white">
    <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3.5 sm:px-6">
      <a href="/" data-testid="nav-home-link" className="group flex items-center">
        <img
          data-testid="nav-logo"
          src="/logo-full.png"
          alt="Advolve"
          className="h-6 w-auto transition-transform duration-300 group-hover:scale-[1.03] sm:h-7"
        />
      </a>
      <span data-testid="nav-tagline" className="hidden font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 md:block">
        Performance marketing · India
      </span>
      {ctaHref ? (
        <a
          data-testid="nav-book-button"
          href={ctaHref}
          className="btn-metal inline-flex items-center rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold text-white ring-1 ring-white/25 transition-transform duration-300 hover:scale-105 sm:px-5 sm:text-sm"
        >
          {ctaLabel}
        </a>
      ) : (
        <BookButton testid="nav-book-button" label={ctaLabel} className="px-4 py-2 text-xs sm:px-5 sm:text-sm" />
      )}
    </div>
  </nav>
);

export default Navbar;
