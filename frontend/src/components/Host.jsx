import { motion } from "framer-motion";
import { HOST_PHOTO, HOST_NAME } from "@/config/site";

const CHIPS = ["Founder-led", "Ads → Meetings", "Straight answers"];

const Host = () => (
  <section data-testid="meet-host-section" className="relative overflow-hidden bg-slate-950 py-16 text-white sm:py-24">
    <span
      aria-hidden
      className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-heading text-[22vw] font-extrabold leading-none text-white/[0.04] sm:text-[14rem]"
    >
      FOUNDER
    </span>
    <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
      <div className="grid items-center gap-10 md:grid-cols-[300px_1fr]">
        <motion.div
          initial={{ opacity: 0, rotate: -4, y: 24 }}
          whileInView={{ opacity: 1, rotate: -2, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-64 sm:w-72 md:w-full"
        >
          <span aria-hidden className="absolute -inset-2 rounded-2xl border border-white/15" />
          <span aria-hidden className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl bg-white/5" />
          <img
            data-testid="host-photo"
            src={HOST_PHOTO}
            alt={`${HOST_NAME}, Founder of Advolve`}
            className="relative aspect-[4/5] w-full rounded-2xl border border-white/20 object-cover grayscale transition-all duration-700 hover:rotate-1 hover:grayscale-0"
            loading="lazy"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">Meet your host</p>
          <h2 data-testid="host-name" className="mt-3 font-heading text-3xl font-extrabold tracking-tight sm:text-5xl">
            {HOST_NAME}<span className="metal-text-light">.</span>
          </h2>
          <p className="mt-2 font-mono text-xs font-semibold uppercase tracking-widest text-slate-500">Founder, Advolve</p>
          <p data-testid="host-bio" className="mt-6 border-l-2 border-white/20 pl-5 text-base leading-relaxed text-slate-300 sm:text-lg">
            I build and run done-for-you client acquisition systems for high-ticket coaches in India — the ads, the
            qualification, the calendar bookings. On this call you talk to me directly, not a sales rep, and you get a
            straight answer on whether the Pre-Sold Funnel fits your program.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {CHIPS.map((c) => (
              <span key={c} data-testid={`host-chip-${c}`} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-300">
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Host;
