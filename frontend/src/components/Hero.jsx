import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, Zap } from "lucide-react";
import { YOUTUBE_VIDEO_ID, VSL_THUMBNAIL } from "@/config/site";
import { DotLoader } from "@/components/ui/dot-loader";
import BookButton from "@/components/BookButton";

const LIVE_FRAMES = [
  [14, 7, 0, 8, 6, 13, 20],
  [14, 7, 13, 20, 16, 27, 21],
  [14, 20, 27, 21, 34, 24, 28],
  [27, 21, 34, 28, 41, 32, 35],
  [34, 28, 41, 35, 48, 40, 42],
  [34, 28, 41, 35, 48, 42, 46],
  [34, 28, 41, 35, 48, 42, 38],
  [34, 28, 41, 35, 48, 30, 21],
  [34, 28, 41, 48, 21, 22, 14],
  [34, 28, 41, 21, 14, 16, 27],
  [34, 28, 21, 14, 10, 20, 27],
  [28, 21, 14, 4, 13, 20, 27],
  [28, 21, 14, 12, 6, 13, 20],
  [28, 21, 14, 6, 13, 20, 11],
  [28, 21, 14, 6, 13, 20, 10],
  [14, 6, 13, 20, 9, 7, 21],
];

const line = {
  hidden: { y: "115%" },
  show: (i) => ({
    y: "0%",
    transition: { delay: 0.15 + i * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  }),
};

const MaskedLine = ({ i, children, className = "" }) => (
  <span className="block overflow-hidden pb-1">
    <motion.span custom={i} variants={line} initial="hidden" animate="show" className={`block ${className}`}>
      {children}
    </motion.span>
  </span>
);

const Hero = () => {
  const [playing, setPlaying] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const videoY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <header ref={ref} data-testid="hero-section" className="relative mx-auto max-w-5xl px-4 pt-10 sm:px-6 sm:pt-16">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        data-testid="hero-eyebrow"
        className="mb-6 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500 sm:text-xs"
      >
        Get 30 new clients in the next 30 days
      </motion.p>

      <h1 data-testid="hero-headline" className="font-heading text-4xl font-extrabold leading-[1.02] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
        <MaskedLine i={0}>The 45-Minute</MaskedLine>
        <MaskedLine i={1}>Client Pipeline</MaskedLine>
        <MaskedLine i={2} className="metal-text">Audit.</MaskedLine>
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="mt-6 flex flex-wrap items-center gap-3"
      >
        <span data-testid="hero-scarcity-badge" className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-red-600">
          <Zap className="h-3.5 w-3.5" /> Limited to 4 meetings a day
        </span>
        <span data-testid="hero-price-badge" className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-slate-900">
          ₹21 to hold your slot
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ y: videoY }}
        className="mt-10"
      >
        <div data-testid="vsl-player" className="relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-2xl shadow-slate-950/20">
          {playing ? (
            <iframe
              data-testid="vsl-iframe"
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`}
              title="Advolve Client Pipeline Audit — VSL"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              data-testid="vsl-play-button"
              onClick={() => setPlaying(true)}
              className="group absolute inset-0 h-full w-full"
              aria-label="Play video"
            >
              <img
                src={VSL_THUMBNAIL || `https://i.ytimg.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`}
                alt="Watch: how the 45-minute Client Pipeline Audit works"
                className="h-full w-full object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-95"
                loading="eager"
              />
              <span data-testid="hero-live-indicator" className="absolute right-4 top-4 flex items-center gap-2 rounded-md bg-slate-950/70 px-2.5 py-1.5 backdrop-blur">
                <DotLoader frames={LIVE_FRAMES} duration={120} dotClassName="bg-white/15 [&.active]:bg-white size-1" />
                <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-white/70">Live</span>
              </span>
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="play-ring flex h-16 w-16 items-center justify-center rounded-full bg-slate-950 text-white shadow-xl shadow-slate-950/40 transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
                  <Play className="ml-1 h-6 w-6 fill-current sm:h-8 sm:w-8" />
                </span>
              </span>
              <span className="absolute bottom-4 left-4 rounded-md bg-slate-950/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-white backdrop-blur">
                Watch first — 3 min
              </span>
            </button>
          )}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.05, duration: 0.6 }}
        className="mt-8"
      >
        <BookButton testid="hero-book-button" className="px-8 py-4 text-base" />
      </motion.div>
    </header>
  );
};

export default Hero;
