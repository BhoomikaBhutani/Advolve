import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

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
    <p className="mb-3 text-center font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500">No surprises</p>
    <h2 className="text-center font-heading text-2xl font-bold tracking-tight text-slate-950 sm:text-4xl">
      Asked, <span className="metal-text">answered.</span>
    </h2>
    <Accordion type="single" collapsible defaultValue="faq-0" className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
      {FAQS.map((f, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: i * 0.05, duration: 0.45 }}
        >
          <AccordionItem value={`faq-${i}`} className="border-0">
            <AccordionTrigger data-testid={`faq-question-${i + 1}`} className="group py-6 text-left hover:no-underline">
              <span className="flex items-baseline gap-4 sm:gap-6">
                <span className="font-heading text-2xl font-extrabold text-slate-200 transition-colors duration-300 group-hover:text-slate-950 group-data-[state=open]:text-slate-950 sm:text-3xl">
                  0{i + 1}
                </span>
                <span className="font-heading text-base font-semibold text-slate-900 sm:text-xl">{f.q}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent data-testid={`faq-answer-${i + 1}`} className="pb-6 pl-12 text-sm leading-relaxed text-slate-600 sm:pl-16 sm:text-base">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        </motion.div>
      ))}
    </Accordion>
  </section>
);

export default Faq;
