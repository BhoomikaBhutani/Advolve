import { motion } from "framer-motion";
import { CalendarCheck, ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";
import { CALENDLY_URL, BRAND } from "@/config/site";

export default function ThankYouPage() {
  return (
    <div data-testid="thank-you-page" className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-white">
      <Seo title={`Your slot is held — ${BRAND}`} siteName={BRAND} />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/60 p-8 text-center sm:p-10"
      >
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600/15 text-blue-400">
          <CalendarCheck className="h-7 w-7" />
        </span>
        <h1 className="mt-6 font-heading text-2xl font-extrabold tracking-tight sm:text-3xl">
          Payment received. <span className="text-blue-400">One last step.</span>
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
          Your ₹21 has held your slot. Now pick the exact time that suits you on the calendar — it takes under a minute.
        </p>
        <motion.a
          data-testid="thank-you-calendly-button"
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white"
        >
          Pick my time slot
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </motion.a>
        <p className="mt-6 text-xs text-slate-500">
          Your Google Meet link and a free reschedule link arrive in your confirmation email.
        </p>
      </motion.div>
    </div>
  );
}
