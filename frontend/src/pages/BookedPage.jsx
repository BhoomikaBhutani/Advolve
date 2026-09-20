import { useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Mail, FolderSearch, BellRing } from "lucide-react";
import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { trackEvent } from "@/lib/pixel";
import { CONTACT_EMAIL } from "@/config/site";

const STEPS = [
  { icon: Mail, text: "A calendar invite with the Google Meet link is on its way to your inbox" },
  { icon: FolderSearch, text: "Check your spam folder if it doesn't arrive in 5 minutes" },
  { icon: BellRing, text: "You'll get reminders 24 hours and 1 hour before the meeting" },
];

export default function BookedPage() {
  useEffect(() => {
    if (!sessionStorage.getItem("adv_schedule_fired")) {
      sessionStorage.setItem("adv_schedule_fired", "1");
      trackEvent("Schedule");
    }
  }, []);

  return (
    <div data-testid="booked-page" className="flex min-h-screen flex-col bg-slate-950 text-white">
      <Seo title="You're booked — Advolve" siteName="Advolve" robots="noindex, nofollow" />
      <Navbar hideCta dark />
      <main className="flex flex-1 items-center justify-center px-4 py-16">
        <div className="w-full max-w-md text-center">
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 14 }}
            data-testid="booked-success-icon"
            className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500 text-white shadow-[0_0_60px_-5px_rgba(34,197,94,0.6)]"
          >
            <span aria-hidden className="absolute inset-0 animate-ping rounded-full bg-green-500/40" />
            <span aria-hidden className="absolute -inset-3 rounded-full border border-green-500/30" />
            <Check className="relative h-10 w-10" strokeWidth={3} />
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 font-heading text-4xl font-extrabold tracking-tight sm:text-5xl"
          >
            You're <span className="metal-text-light">booked.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            data-testid="booked-subline"
            className="mt-3 text-sm text-slate-300 sm:text-base"
          >
            Your 45-minute strategy meeting with Nishant Bhutani is confirmed.
          </motion.p>

          <div data-testid="booked-next-steps" className="mt-10 space-y-3 text-left">
            <p className="text-center font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500">
              What happens next
            </p>
            {STEPS.map((s, i) => (
              <motion.div
                key={i}
                data-testid={`booked-step-${i + 1}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.75 + i * 0.15, duration: 0.5 }}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-slate-200">
                  <s.icon className="h-4 w-4" />
                </span>
                <p className="pt-1.5 text-sm leading-relaxed text-slate-300">{s.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="mt-10 border-t border-white/10 pt-6 text-xs leading-relaxed text-slate-500"
          >
            <p data-testid="booked-reschedule-note">
              Need to reschedule? Use the link in your confirmation email — free up to 4 hours before the meeting.
            </p>
            <p data-testid="booked-support-note" className="mt-3">
              Questions? Write to{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-white underline">
                {CONTACT_EMAIL}
              </a>{" "}
              or WhatsApp{" "}
              <a
                href="https://wa.me/918237877014"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="booked-whatsapp-link"
                className="font-semibold text-white underline"
              >
                +91 8237877014
              </a>
            </p>
          </motion.div>
        </div>
      </main>
      <Footer hideCta />
    </div>
  );
}
