import { useEffect } from "react";
import { motion } from "framer-motion";
import { Check, TriangleAlert } from "lucide-react";
import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LiquidMetalButton } from "@/components/ui/liquid-metal-button";
import { trackEvent } from "@/lib/pixel";
import { CALENDLY_URL, CONTACT_EMAIL } from "@/config/site";

export default function ThankYouPage() {
  useEffect(() => {
    if (!sessionStorage.getItem("adv_purchase_fired")) {
      sessionStorage.setItem("adv_purchase_fired", "1");
      trackEvent("Purchase", { value: 21, currency: "INR" });
    }
  }, []);

  return (
    <div data-testid="thank-you-page" className="flex min-h-screen flex-col bg-white">
      <Seo title="Payment received — Advolve" siteName="Advolve" robots="noindex, nofollow" />
      <Navbar ctaLabel="Pick Slot" ctaHref={CALENDLY_URL} />
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

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            data-testid="thank-you-warning"
            className="mt-6 rounded-2xl border-2 border-amber-400 bg-amber-50 px-5 py-5 text-left shadow-[0_10px_35px_-10px_rgba(245,158,11,0.4)]"
          >
            <p className="flex items-center gap-2 font-heading text-xl font-extrabold tracking-tight text-slate-950 sm:text-2xl">
              <TriangleAlert className="h-6 w-6 shrink-0 text-amber-500" /> You're not done yet.
            </p>
            <p data-testid="thank-you-subline" className="mt-2 text-sm font-semibold text-slate-800 sm:text-base">
              One step left — pick your meeting slot below.
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Your meeting is <span className="font-bold text-red-600">not confirmed</span> until you choose a time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
            className="mt-8 flex justify-center"
          >
            <span data-testid="thank-you-calendly-button">
              <LiquidMetalButton
                label="Pick My Meeting Slot"
                width={252}
                onClick={() => {
                  window.location.href = CALENDLY_URL;
                }}
              />
            </span>
          </motion.div>

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
              href="https://wa.me/918237877014"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="thank-you-whatsapp-link"
              className="font-semibold text-slate-900 underline"
            >
              +91 8237877014
            </a>
          </p>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
