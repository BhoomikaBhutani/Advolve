import { motion } from "framer-motion";
import { HOST_PHOTO, HOST_NAME } from "@/config/site";

const Host = () => (
  <section data-testid="meet-host-section" className="border-y border-slate-200 bg-slate-50 py-16 sm:py-24">
    <div className="mx-auto max-w-4xl px-4 sm:px-6">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-600"
      >
        Your host
      </motion.p>
      <div className="grid items-center gap-8 md:grid-cols-[280px_1fr]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          <img
            data-testid="host-photo"
            src={HOST_PHOTO}
            alt={`${HOST_NAME}, Founder of Advolve`}
            className="aspect-[4/5] w-full object-cover"
            loading="lazy"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-950 sm:text-4xl">Meet your host</h2>
          <p data-testid="host-name" className="mt-4 font-heading text-xl font-bold text-slate-900">{HOST_NAME}</p>
          <p className="mt-1 font-mono text-xs font-semibold uppercase tracking-widest text-blue-600">Founder, Advolve</p>
          <p data-testid="host-bio" className="mt-5 text-base leading-relaxed text-slate-600">
            Performance marketer and founder of Advolve. I build and run done-for-you client acquisition systems for
            high-ticket coaches in India — the ads, the qualification, and the calendar bookings. On this call you talk
            to me directly, not a sales rep, and you get a straight answer on whether the Pre-Sold Funnel fits your program.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Host;
