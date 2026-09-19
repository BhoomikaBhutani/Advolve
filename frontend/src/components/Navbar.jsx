import { BRAND } from "@/config/site";
import BookButton from "@/components/BookButton";

const Navbar = () => (
  <nav data-testid="site-navbar" className="sticky top-0 z-40 border-b border-slate-200 bg-white">
    <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3.5 sm:px-6">
      <a href="/" data-testid="nav-home-link" className="group flex items-center gap-2.5">
        <span className="btn-metal flex h-8 w-8 items-center justify-center rounded-lg bg-slate-950 font-heading text-sm font-extrabold text-white transition-transform duration-300 group-hover:-rotate-6">
          A.
        </span>
        <span data-testid="nav-logo" className="font-heading text-lg font-extrabold tracking-tight text-slate-950">
          {BRAND}<span className="text-slate-400">.</span>
        </span>
      </a>
      <span data-testid="nav-tagline" className="hidden font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 md:block">
        Performance marketing · India
      </span>
      <BookButton testid="nav-book-button" label="Book · ₹21" className="px-4 py-2 text-xs sm:px-5 sm:text-sm" />
    </div>
  </nav>
);

export default Navbar;
