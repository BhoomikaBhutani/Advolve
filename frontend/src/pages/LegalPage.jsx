import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import { BRAND, CONTACT_EMAIL } from "@/config/site";

const CONTENT = {
  "privacy-policy": {
    title: "Privacy Policy",
    sections: [
      { h: "What we collect", p: `When you book the 45-Minute Client Pipeline Audit, Razorpay collects your name, email, phone number and payment details on our behalf. If you go on to schedule a slot, Calendly collects your chosen time and contact details.` },
      { h: "How we use it", p: `We use your details only to run the audit: confirming your booking, sending your Google Meet link, reminding you before the call, and processing refunds if you cancel in time. We do not sell your data to anyone.` },
      { h: "Advertising pixels", p: `This site uses the Meta Pixel to measure how our ads perform. It records page views and button clicks. You can opt out of ad personalisation in your Meta account settings.` },
      { h: "Payments", p: `Payments are processed entirely by Razorpay. We never see or store your card, UPI or banking details.` },
      { h: "Your choices", p: `You can ask us to correct or delete your personal data at any time by writing to ${CONTACT_EMAIL}.` },
      { h: "Contact", p: `Questions about this policy: ${CONTACT_EMAIL}.` },
    ],
  },
  terms: {
    title: "Terms & Conditions",
    sections: [
      { h: "The service", p: `The ₹21 payment reserves a 45-minute one-to-one Client Pipeline Audit with the founder of ${BRAND}, held as a private 1:1 strategy meeting over video call. The call is an assessment of your client acquisition pipeline, not a guarantee of results or revenue.` },
      { h: "Booking", p: `Slots are limited to four per day and are allocated in the order payments are completed. Your slot is confirmed only after successful payment and calendar scheduling.` },
      { h: "The ₹21 charge", p: `The ₹21 is a commitment filter, not a professional fee. It is refundable under the conditions described in our Cancellation & Rescheduling policy.` },
      { h: "No guarantees", p: `Any numbers discussed on the call — ad spend, meeting volume, conversion maths — are estimates based on the information you provide. Actual results depend on your program, market and execution.` },
      { h: "Conduct", p: `We may decline or end a call that is outside the stated audience (relationship coaches in India charging ₹10,000 or more) or that is abusive. In such cases the ₹21 is refunded.` },
      { h: "Contact", p: `Questions about these terms: ${CONTACT_EMAIL}.` },
    ],
  },
  cancellation: {
    title: "Cancellation & Rescheduling",
    sections: [
      { h: "Rescheduling", p: `Free, up to 4 hours before your scheduled time. Use the reschedule link in your confirmation email to pick a new slot.` },
      { h: "Cancelling with a refund", p: `Cancel more than 4 hours before your scheduled time and your ₹21 is fully refunded to the original payment method. Write to ${CONTACT_EMAIL} or use the link in your confirmation email.` },
      { h: "Late cancellation & no-shows", p: `Cancellations within 4 hours of the call, or missed calls without notice, are not refundable — the slot was held for you and could not be offered to someone else.` },
      { h: "If we cancel", p: `If ${BRAND} has to cancel your audit for any reason, your ₹21 is refunded in full, or you may choose a priority rebooking.` },
    ],
  },
  contact: {
    title: "Contact",
    sections: [
      { h: "Email", p: `For bookings, refunds, rescheduling or anything else: ${CONTACT_EMAIL}. We reply within one working day.` },
      { h: "About the audit", p: `The fastest way to reach the founder is to book the audit itself — 45 minutes, one-to-one, with the full agenda published on this page.` },
    ],
  },
};

export default function LegalPage({ slug: slugProp }) {
  const params = useParams();
  const slug = slugProp || params.slug;
  const page = CONTENT[slug] || CONTENT["privacy-policy"];

  return (
    <div data-testid={`legal-page-${slug}`} className="min-h-screen bg-white">
      <Seo title={`${page.title} — ${BRAND}`} siteName={BRAND} />
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-16">
        <Link to="/" data-testid="legal-back-link" className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 transition-colors hover:text-slate-500">
          <ArrowLeft className="h-4 w-4" /> Back to the audit page
        </Link>
        <h1 className="mt-8 font-heading text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">{page.title}</h1>
        <p className="mt-2 font-mono text-xs uppercase tracking-widest text-slate-400">{BRAND}</p>
        <div className="mt-10 space-y-8">
          {page.sections.map((s, i) => (
            <section key={i} data-testid={`legal-section-${i + 1}`}>
              <h2 className="font-heading text-lg font-bold text-slate-900">{s.h}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">{s.p}</p>
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
