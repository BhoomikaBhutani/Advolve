import { motion } from "framer-motion";

const PARAS = [
  "This is not a webinar, a group call, or a rep reading a script. It's 45 minutes with the person who would actually run your campaigns.",
  "The ₹21 isn't a fee — it's a filter. It costs less than a cup of chai and it means the four people I meet each day genuinely want to be there. Fully refundable if you cancel more than 4 hours ahead.",
  "You'll leave knowing exactly what your client pipeline is costing you, where it's breaking, and what fixing it would take.",
];

const AboutMeeting = () => (
  <section data-testid="about-meeting-section" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500"
    >
      Read this before you book
    </motion.p>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="font-heading text-2xl font-bold tracking-tight text-slate-950 sm:text-4xl"
    >
      About this meeting
    </motion.h2>
    <div className="mt-8 space-y-6">
      {PARAS.map((p, i) => (
        <motion.p
          key={i}
          data-testid={`about-meeting-para-${i + 1}`}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: i * 0.08, duration: 0.5 }}
          className="border-l-2 border-slate-950 pl-5 text-base leading-relaxed text-slate-600 sm:text-lg"
        >
          {p}
        </motion.p>
      ))}
    </div>
  </section>
);

export default AboutMeeting;
