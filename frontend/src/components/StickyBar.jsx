import { useIstCountdown } from "@/hooks/useIstCountdown";
import { LiquidMetalButton } from "@/components/ui/liquid-metal-button";
import { RAZORPAY_URL } from "@/config/site";
import { trackEventAsync } from "@/lib/pixel";

const StickyBar = () => {
  const { label } = useIstCountdown();
  const handleBook = () => {
    trackEventAsync("InitiateCheckout", { value: 21, currency: "INR" });
    window.location.href = RAZORPAY_URL;
  };
  return (
    <div data-testid="sticky-booking-bar" className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-slate-950 shadow-[0_-10px_40px_rgba(15,23,42,0.45)]">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="min-w-0">
          <p data-testid="sticky-bar-countdown" className="flex items-center gap-2 font-mono text-sm font-bold tabular-nums text-white sm:text-base">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
            </span>
            Slots close in {label}
          </p>
        </div>
        <span data-testid="sticky-bar-book-button" className="shrink-0">
          <LiquidMetalButton label="Book your slot · ₹21" onClick={handleBook} />
        </span>
      </div>
    </div>
  );
};

export default StickyBar;
