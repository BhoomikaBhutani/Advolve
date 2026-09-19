import { motion } from "framer-motion";
import BookButton from "@/components/BookButton";

const SEGMENTS = [
  { num: "01", mins: 5, title: "Introduction", desc: "Who you are, what you coach, what you charge, and what you want the next 90 days to look like." },
  { num: "02", mins: 10, title: "Your Numbers Today", desc: "Where your clients come from right now. What you're already spending. How many enquiries turn into paying clients. I ask, you answer." },
  { num: "03", mins: 10, title: "Where It's Leaking", desc: "I show you the specific points where interested people are dropping off. Most coaches have two or three, and they're rarely the ones they expect." },
  { num: "04", mins: 10, title: "The Pre-Sold Funnel, Built for You", desc: "How the system would work for your program specifically — the ad spend, the meeting volume, the conversion maths at your price point." },
  { num: "05", mins: 7, title: "Your Questions", desc: "Anything you want to ask. Pricing, timelines, what we need from you, what happens if it doesn't work." },
  { num: "06", mins: 3, title: "A Straight Answer", desc: "I tell you whether I think this will work for you. If it won't, I'll say so and tell you what I'd do instead." },
];

const clockAt = (index) => {
  const start = SEGMENTS.slice(0, index).reduce((a, s) => a + s.mins, 0);
  const end = start + SEGMENTS[index].mins;
  const fmt = (m) => `00:${String(m).padStart(2, "0")}`;
  return `${fmt(start)} → ${fmt(end)}`;
};

const Agenda = () => (
  <section data-testid="agenda-section" className="bg-slate-950 py-16 text-white sm:py-24">
    <div className="mx-auto max-w-3xl px-4 sm:px-6">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-400"
      >
        The centrepiece — nobody else shows you this
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-heading text-2xl font-bold tracking-tight sm:text-4xl"
      >
        45 minutes. 6 segments.
        <span className="text-blue-400"> Every minute published.</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base"
      >
        Most "strategy calls" are a pitch in disguise. This is the full clock, published in advance — so you can judge for yourself.
      </motion.p>

      <div className="relative mt-12 ml-3 space-y-8 border-l-2 border-blue-500/30 pl-7 sm:ml-4 sm:pl-10">
        {SEGMENTS.map((s, i) => (
          <motion.article
            key={s.num}
            data-testid={`agenda-segment-${s.num}`}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative"
          >
            <span className="absolute -left-[38px] top-1 h-4 w-4 rounded-full border-2 border-blue-400 bg-slate-950 sm:-left-[50px]" />
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <span className="font-heading text-4xl font-extrabold text-blue-500/25 sm:text-5xl">{s.num}</span>
              <h3 className="font-heading text-lg font-bold sm:text-2xl">{s.title}</h3>
              <span className="font-mono text-xs font-semibold text-blue-400" data-testid={`agenda-time-${s.num}`}>
                {clockAt(i)} · {s.mins} mins
              </span>
            </div>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">{s.desc}</p>
          </motion.article>
        ))}
      </div>

      <div className="mt-12">
        <BookButton testid="agenda-book-button" dark label="Hold my slot — ₹21" className="px-8 py-4 text-base" />
      </div>
    </div>
  </section>
);

export default Agenda;
