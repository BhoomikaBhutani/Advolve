import { BRAND } from "@/config/site";

const Navbar = () => (
  <nav data-testid="site-navbar" className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5 sm:px-6">
    <span data-testid="nav-logo" className="font-heading text-xl font-extrabold tracking-tight text-slate-950">
      {BRAND}<span className="text-slate-400">.</span>
    </span>
    <span data-testid="nav-tagline" className="hidden font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:block">
      Performance marketing · India
    </span>
  </nav>
);

export default Navbar;
