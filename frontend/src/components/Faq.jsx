import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  { q: "Is this a sales call?", a: "Partly, and I'd rather say so. The first 25 minutes are genuinely about your business. The last 20 are where I explain what we do and you decide. You'll know by minute 45 whether it's a yes or a no." },
  { q: "Why charge ₹21 at all?", a: "Because free calls get booked and not attended. ₹21 costs nothing but it means the people on my calendar actually show up. Refundable if you cancel with 4 hours' notice." },
  { q: "What do I need to prepare?", a: "Nothing. Just know roughly what you charge and where your current clients come from." },
  { q: "What if I'm not ready to spend on ads yet?", a: "Then I'll tell you that on the call and we won't waste each other's time. You'll still leave with a clearer view of your funnel." },
  { q: "Will you give me a quote on the call?", a: "Yes, if it's a fit. Real numbers for your program, not a brochure." },
  { q: "What if I need to reschedule?", a: "Free, up to 4 hours before. There's a link in your confirmation email." },
];

const Faq = () => (
  <section data-testid="faq-section" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
    <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-600">No surprises</p>
    <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-950 sm:text-4xl">
      Frequently asked questions
    </h2>
    <Accordion type="single" collapsible className="mt-10 space-y-3">
      {FAQS.map((f, i) => (
        <AccordionItem
          key={i}
          value={`faq-${i}`}
          className="rounded-2xl border border-slate-200 bg-white px-5 shadow-sm"
        >
          <AccordionTrigger data-testid={`faq-question-${i + 1}`} className="py-5 text-left font-heading text-base font-semibold text-slate-900 hover:no-underline sm:text-lg">
            {f.q}
          </AccordionTrigger>
          <AccordionContent data-testid={`faq-answer-${i + 1}`} className="pb-5 text-sm leading-relaxed text-slate-600 sm:text-base">
            {f.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </section>
);

export default Faq;
