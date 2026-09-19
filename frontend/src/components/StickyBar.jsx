import { useIstCountdown } from "@/hooks/useIstCountdown";
import { LiquidMetalButton } from "@/components/ui/liquid-metal-button";
import { RAZORPAY_URL } from "@/config/site";
import { trackEvent } from "@/lib/pixel";

const StickyBar = () => {
  const countdown = useIstCountdown();
  const handleBook = () => {
    trackEvent("InitiateCheckout", { value: 21, currency: "INR" });
    window.open(RAZORPAY_URL, "_blank", "noopener,noreferrer");
  };
  return (
    <div data-testid="sticky-booking-bar" className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white shadow-[0_-8px_30px_rgba(15,23,42,0.12)]">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="min-w-0">
          <p data-testid="sticky-bar-meta" className="truncate text-[11px] font-medium text-slate-500 sm:text-xs">
            45 mins · 1:1 · Google Meet
          </p>
          <p className="mt-0.5 flex flex-wrap items-baseline gap-x-2">
            <span data-testid="sticky-bar-price" className="font-heading text-base font-extrabold text-slate-950 sm:text-lg">₹21</span>
            <span className="hidden text-[11px] text-slate-500 sm:inline">to hold your slot</span>
            <span data-testid="sticky-bar-countdown" className="font-mono text-xs font-bold text-blue-600 sm:text-sm">
              Today's slots close in {countdown}
            </span>
          </p>
        </div>
        <span data-testid="sticky-bar-book-button" className="shrink-0">
          <LiquidMetalButton label="Book — ₹21" onClick={handleBook} />
        </span>
      </div>
    </div>
  );
};

export default StickyBar;
