import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Highlights from "@/components/Highlights";
import WhyBook from "@/components/WhyBook";
import Agenda from "@/components/Agenda";
import AboutMeeting from "@/components/AboutMeeting";
import Host from "@/components/Host";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";

export default function LandingPage() {
  return (
    <div data-testid="landing-page" className="min-h-screen bg-white">
      <Seo
        title="Advolve — The 45-Minute Client Pipeline Audit"
        siteName="Advolve"
        description="A 45-minute 1:1 audit for relationship coaches charging ₹10,000+. See where your enquiries leak, what a full calendar would cost, and get a straight answer. ₹21 to hold your slot — 4 meetings a day."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Advolve",
          description:
            "Performance marketing agency in India running done-for-you client acquisition systems for high-ticket coaches.",
          founder: { "@type": "Person", name: "Nishant Bhutani" },
        }}
      />
      <Navbar />
      <main className="pb-8">
        <Hero />
        <Marquee />
        <Highlights />
        <WhyBook />
        <Agenda />
        <AboutMeeting />
        <Host />
        <Faq />
      </main>
      <Footer />
      <StickyBar />
    </div>
  );
}
