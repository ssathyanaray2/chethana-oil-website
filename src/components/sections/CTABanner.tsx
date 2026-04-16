import Link from "next/link";
import { site } from "@/data/site";

export default function CTABanner() {
  return (
    <section className="px-4 sm:px-8 py-8 md:py-14">
      <div className="max-w-7xl mx-auto bg-primary rounded-[2rem] md:rounded-[3.5rem] p-8 md:p-16 text-center relative overflow-hidden border border-outline">
        <div className="absolute inset-0 bg-white opacity-5 pointer-events-none" />
        <div className="relative z-10 space-y-5 md:space-y-7">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-on-primary leading-tight">
            Straight from Challakere <br className="hidden sm:block" />
            to your kitchen
          </h2>
          <p className="text-on-primary text-base md:text-xl opacity-80 max-w-2xl mx-auto">
            Join {site.familiesServed} families who have switched to uncompromised
            purity. Your health is our heritage.
          </p>
          <Link
            href="/#order"
            className="inline-flex items-center gap-3 bg-surface-container-lowest text-primary px-7 md:px-10 py-4 md:py-5 rounded-2xl font-extrabold text-base md:text-xl sun-shadow hover:scale-105 transition-transform"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              chat
            </span>
            Order via WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}
