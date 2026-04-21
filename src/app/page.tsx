import { oils } from "@/data/oils";
import { site } from "@/data/site";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ScienceSection from "@/components/sections/ScienceSection";
// import BottleScrollAnimation from "@/components/BottleScrollAnimation";
import JourneySection from "@/components/sections/JourneySection";
import ProductsSection from "@/components/sections/ProductsSection";
import GayusGlitz from "@/components/sections/GayusGlitz";
import FamilySection from "@/components/sections/FamilySection";
import CTABanner from "@/components/sections/CTABanner";
import FAQSection from "@/components/sections/FAQSection";
import StickyWhatsApp from "@/components/layout/StickyWhatsApp";

// JSON-LD structured data — helps Google show rich results
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description: site.description,
  url: site.url,
  logo: `${site.url}/images/logo.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Challakere",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  foundingDate: String(site.founded),
  offers: oils.map((oil) => ({
    "@type": "Offer",
    name: `Cold Pressed ${oil.name}`,
    description: oil.description,
    price: String(oil.price),
    priceCurrency: "INR",
    availability: oil.available
      ? "https://schema.org/InStock"
      : "https://schema.org/OutOfStock",
  })),
};

export default function HomePage() {
  return (
    <>
      {/* Structured data for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main>
        {/* <BottleScrollAnimation> */}
          <Hero />
          <ScienceSection />
          <JourneySection />
          <ProductsSection />
          <FamilySection />
          <GayusGlitz />
          {/* <WhatsAppOrder /> */}
          <FAQSection />
          <CTABanner />
        {/* </BottleScrollAnimation> */}
      </main>

      <Footer />
      <StickyWhatsApp />
    </>
  );
}
