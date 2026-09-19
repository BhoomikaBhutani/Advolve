import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { RAZORPAY_URL } from "@/config/site";
import { trackEvent } from "@/lib/pixel";

const BookButton = ({ label = "Book your slot — ₹21", testid = "book-cta-button", className = "", dark = false }) => {
  const handleClick = () => {
    trackEvent("InitiateCheckout", { value: 21, currency: "INR" });
    window.location.href = RAZORPAY_URL;
  };
  return (
    <motion.button
      data-testid={testid}
      onClick={handleClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={`group inline-flex items-center justify-center gap-2 rounded-full font-semibold ${
        dark ? "bg-white text-slate-950" : "bg-slate-950 text-white shadow-[0_14px_40px_-10px_rgba(15,23,42,0.6)] ring-1 ring-white/25"
      } btn-metal ${className}`}
    >
      <span>{label}</span>
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </motion.button>
  );
};

export default BookButton;
