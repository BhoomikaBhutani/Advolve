const ITEMS = ["Run the ads", "Qualify the enquiries", "Book the meetings", "You just take the calls", "The Pre-Sold Funnel"];

const Marquee = () => {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div data-testid="editorial-marquee" className="mt-16 overflow-hidden border-y border-slate-200 bg-slate-50 py-4 sm:mt-24">
      <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
        {[...row, ...row].map((item, i) => (
          <span key={i} className="flex items-center gap-8 font-heading text-lg font-semibold uppercase tracking-wide text-slate-400 sm:text-xl">
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-slate-950" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
