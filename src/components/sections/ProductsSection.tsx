"use client";

import Image from "next/image";

import { oils } from "@/data/oils";
import { useTranslations } from "next-intl";

export default function ProductsSection() {
  const t = useTranslations("products");
  return (
    <section className="py-12 md:py-20" id="oils">
      <div className="px-4 sm:px-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            {t("heading")}
          </h2>
        </div>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden" style={{ WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)" }}>
        <div className="flex gap-5 w-max animate-marquee hover:[animation-play-state:paused]">
          {[...oils, ...oils].map((oil, i) => (
            <div
              key={`${oil.slug}-${i}`}
              className="bg-surface-container rounded-[2.5rem] overflow-hidden sun-shadow border border-outline flex-none w-[220px] md:w-[260px]"
            >
              <div className="h-48 bg-background relative overflow-hidden">
                <Image
                  src={oil.image}
                  alt={`Chetana Cold Pressed ${oil.name}`}
                  fill
                  className="object-contain p-4"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary">
                  {oil.emoji} {oil.badge}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-base font-bold">{oil.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
