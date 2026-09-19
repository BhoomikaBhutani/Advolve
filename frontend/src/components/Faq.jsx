import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const FAQS = [
  { q: "What does the actual service cost, if I want it?", a: "₹25,000 a month for the management, plus ₹30,000 in ad spend paid directly to Meta from your own account. So budget ₹55,000 a month in total. If that's out of range, tell me now and we'll skip the call." },
  { q: "Do I need to already be running ads?", a: "No. Most coaches we speak to have either never run ads or tried once and stopped. That's normal and it's usually easier than fixing someone else's mess." },
  { q: "Can I really handle 80–90 meetings a month?", a: "That's 4 a day, six days a week, at 30 to 40 minutes each. It's a real load, and it's the honest constraint of this model. If you can't hold that many, we'll build for a smaller number on the call." },
  { q: "What do I need to prepare?", a: "Nothing to read or bring. Just be somewhere quiet, with your camera on and your mic clear. It's a conversation, not a presentation." },
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
