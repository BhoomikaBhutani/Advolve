import { motion } from "framer-motion";
import BookButton from "@/components/BookButton";

const POINTS = [
  "Where your enquiries are actually leaking — named, not guessed",
  "What 80–90 booked meetings a month would cost you at your price point",
  "Whether paid ads make sense for your program, or whether they don't",
  "A straight answer either way, before you spend a rupee",
];

const WhyBook = () => (
  <section data-testid="why-book-section" className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500"
    >
      The offer
    </motion.p>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="font-heading text-2xl font-bold tracking-tight text-slate-950 sm:text-4xl"
    >
      Why should you book this meeting?
    </motion.h2>

    <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
      {POINTS.map((p, i) => (
        <motion.div
          key={i}
          data-testid={`why-book-point-${i + 1}`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: i * 0.08, duration: 0.5 }}
          whileHover={{ y: -4 }}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6"
        >
          <span className="font-mono text-xs font-bold text-slate-400">0{i + 1}</span>
          <p className="mt-3 text-base font-medium leading-relaxed text-slate-800 sm:text-lg">{p}</p>
        </motion.div>
      ))}
    </div>

    <div className="mt-10">
      <BookButton testid="why-book-cta-button" className="px-7 py-3.5 text-sm sm:text-base" />
    </div>
  </section>
);

export default WhyBook;
