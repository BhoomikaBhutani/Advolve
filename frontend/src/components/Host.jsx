import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Quote, Asterisk } from "lucide-react";
import { HOST_PHOTO, HOST_NAME } from "@/config/site";

const MaskedLine = ({ i, children, className = "" }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <span ref={ref} className="block overflow-hidden pb-1">
      <motion.span
        initial={{ y: "110%" }}
        animate={shown ? { y: "0%" } : {}}
        transition={{ delay: i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`block ${className}`}
      >
        {children}
      </motion.span>
    </span>
  );
};

const Mark = ({ children }) => (
  <mark className="bg-white px-1 font-semibold text-slate-950">{children}</mark>
);

const Host = () => (
  <>
    <div aria-hidden className="h-8 bg-slate-50 sm:h-10" />
    <section data-testid="meet-host-section" className="relative overflow-hidden bg-[#0A0F1E] py-16 text-white sm:py-24">
      <div aria-hidden className="pointer-events-none absolute -right-32 top-0 h-[30rem] w-[30rem] rounded-full bg-slate-700/20 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-first md:order-last"
          >
            <span aria-hidden className="absolute -inset-2 rounded-3xl border border-white/10" />
            <img
              data-testid="host-photo"
              src={HOST_PHOTO}
              alt={`${HOST_NAME}, Founder of Advolve`}
              className="relative aspect-[4/5] w-full rounded-3xl border border-white/10 object-cover grayscale transition-all duration-700 hover:grayscale-0 [mask-image:linear-gradient(to_bottom,black_75%,transparent)]"
              loading="lazy"
            />
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400"
            >
              <Quote className="h-3.5 w-3.5 fill-current" /> Meet your host
            </motion.p>

            <h2 data-testid="host-name" className="mt-4 font-heading text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              <MaskedLine i={0}>NISHANT</MaskedLine>
              <MaskedLine i={1}>BHUTANI<span className="metal-text-light">.</span></MaskedLine>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="mt-4 flex items-center gap-2 font-heading text-lg font-semibold text-slate-300 sm:text-xl"
            >
              Founder, Advolve <Asterisk className="h-5 w-5 text-slate-500" />
            </motion.p>

            <motion.blockquote
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="relative mt-8 border-l-2 border-white/20 pl-5"
            >
              <Quote aria-hidden className="absolute -left-2 -top-3 h-5 w-5 fill-slate-600 text-slate-600" />
              <p data-testid="host-bio" className="text-base leading-relaxed text-slate-300 sm:text-lg">
                I build and run <Mark>done-for-you client acquisition systems</Mark> for high-ticket coaches in
                India — the ads, the qualification, the calendar bookings. On this call you talk to me directly, not
                a sales rep, and you get a <Mark>straight answer</Mark> on whether the Pre-Sold Funnel fits your program.
              </p>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Host;
