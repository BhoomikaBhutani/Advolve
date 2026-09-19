import { motion } from "framer-motion";
import { Clock, User, Video, Languages, CalendarDays, BadgeCheck } from "lucide-react";

const FACTS = [
  { icon: Clock, big: "45 mins", small: "Duration" },
  { icon: User, big: "1:1", small: "Never a group call" },
  { icon: Video, big: "Google Meet", small: "Format" },
  { icon: Languages, big: "Hindi / English", small: "Language" },
  { icon: CalendarDays, big: "4 per day", small: "Slots" },
  { icon: BadgeCheck, big: "Founder-led", small: "Not a sales rep" },
];

const Highlights = () => (
  <section data-testid="highlights-grid" className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 sm:gap-4">
      {FACTS.map((f, i) => (
        <motion.div
          key={f.big}
          data-testid={`highlight-card-${i + 1}`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: i * 0.06, duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-shadow hover:shadow-md sm:p-6"
        >
          <f.icon className="mb-3 h-5 w-5 text-blue-600" />
          <span className="font-heading text-lg font-bold text-slate-950 sm:text-xl">{f.big}</span>
          <span className="mt-1 text-xs text-slate-500 sm:text-sm">{f.small}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Highlights;
