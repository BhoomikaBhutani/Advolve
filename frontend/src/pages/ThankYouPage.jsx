import { useEffect } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { trackEvent } from "@/lib/pixel";
import { CALENDLY_URL, CONTACT_EMAIL } from "@/config/site";

export default function ThankYouPage() {
  useEffect(() => {
    if (!sessionStorage.getItem("advolve_purchase_fired")) {
      sessionStorage.setItem("advolve_purchase_fired", "1");
      trackEvent("Purchase", { value: 21, currency: "INR" });
    }
  }, []);

  return (
    <div data-testid="thank-you-page" className="flex min-h-screen flex-col bg-white">
      <Seo title="Payment received — Advolve" siteName="Advolve" robots="noindex, nofollow" />
      <Navbar />
      <main className="flex flex-1 items-center justify-center px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-md text-center"
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 16 }}
            data-testid="payment-success-icon"
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30"
          >
            <Check className="h-8 w-8" strokeWidth={3} />
          </motion.span>

          <h1 className="mt-6 font-heading text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Payment received
          </h1>
          <p data-testid="thank-you-subline" className="mt-3 text-sm text-slate-600 sm:text-base">
            One last step — pick your meeting slot below.
          </p>
          <p data-testid="thank-you-warning" className="mt-4 text-sm font-bold text-slate-950 sm:text-base">
            Your meeting is not confirmed until you choose a time.
          </p>

          <motion.a
            data-testid="thank-you-calendly-button"
            href={CALENDLY_URL}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group btn-metal mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-8 py-4 font-heading text-base font-bold text-white shadow-[0_14px_40px_-10px_rgba(15,23,42,0.6)] ring-1 ring-white/25 sm:text-lg"
          >
            Pick My Meeting Slot
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>

          <p data-testid="thank-you-receipt-note" className="mt-5 text-xs leading-relaxed text-slate-500">
            A payment receipt has been emailed to you. Once you pick a slot, you'll get a calendar invite with the
            joining link.
          </p>

          <p data-testid="thank-you-trouble-note" className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500">
            Trouble booking? Write to{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-slate-900 underline">
              {CONTACT_EMAIL}
            </a>{" "}
            or WhatsApp{" "}
            <a
              href="https://wa.me/919112222611"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="thank-you-whatsapp-link"
              className="font-semibold text-slate-900 underline"
            >
              +91 91122 22611
            </a>
          </p>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
