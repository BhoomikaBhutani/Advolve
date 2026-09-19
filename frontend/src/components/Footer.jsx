import { Link } from "react-router-dom";
import { BRAND, CONTACT_EMAIL } from "@/config/site";
import BookButton from "@/components/BookButton";

const LINKS = [
  { to: "/privacy-policy", label: "Privacy Policy", testid: "footer-privacy-link" },
  { to: "/terms", label: "Terms & Conditions", testid: "footer-terms-link" },
  { to: "/cancellation", label: "Cancellation & Rescheduling", testid: "footer-cancellation-link" },
  { to: "/contact", label: "Contact", testid: "footer-contact-link" },
];

const Footer = () => (
  <footer data-testid="site-footer" className="bg-slate-950 pb-32 pt-16 text-white sm:pb-36">
    <div className="mx-auto max-w-4xl px-4 sm:px-6">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 text-center sm:p-12">
        <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-4xl">
          Four slots a day. <span className="metal-text-light">Yours is one of them.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-slate-400 sm:text-base">
          45 minutes with the person who would actually run your campaigns — and a straight answer at the end of it.
        </p>
        <div className="mt-8 flex justify-center">
          <BookButton testid="footer-book-button" dark label="Book your slot — ₹21" className="px-8 py-4 text-base" />
        </div>
      </div>

      <div className="mt-14 flex flex-col items-center gap-6 border-t border-slate-800 pt-8 sm:flex-row sm:justify-between">
        <p data-testid="footer-brand" className="font-heading text-lg font-extrabold tracking-tight">
          {BRAND}<span className="text-white">.</span>
        </p>
        <nav data-testid="legal-footer-links" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {LINKS.map((l) => (
            <Link key={l.to} to={l.to} data-testid={l.testid} className="text-xs text-slate-400 transition-colors hover:text-white sm:text-sm">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
      <p className="mt-6 text-center text-[11px] text-slate-500 sm:text-left">
        © {new Date().getFullYear()} {BRAND} · {CONTACT_EMAIL}
      </p>
    </div>
  </footer>
);

export default Footer;
