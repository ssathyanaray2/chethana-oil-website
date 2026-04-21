"use client";

import { motion } from "framer-motion";
import { scienceCards } from "@/data/science";
import { useTranslations } from "next-intl";

const EASE = [0.4, 0, 0.2, 1] as [number, number, number, number];

export default function ScienceSection() {
  const t = useTranslations("science");

  return (
    <section className="bg-surface-container relative overflow-hidden py-16 md:py-20 px-4 sm:px-8" id="why">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/bottle-hero.png"
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none opacity-70 w-[300px] lg:w-[500px] -top-12 left-1/2 -translate-x-1/2 rotate-[20deg]"
      />
      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Science stat cards ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-8 md:mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            {t("heading")}
          </h2>
          <p className="text-on-surface-variant text-lg max-w-2xl">
            {t("subheading")}
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-2 md:gap-4 mb-14 md:mb-20">
          {scienceCards.map((card, i) => (
            <motion.div
              key={card.headline}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: EASE }}
              className={`rounded-xl md:rounded-[1.5rem] p-3 md:p-6 flex flex-col sun-shadow ${
                card.variant === "dark"
                  ? "text-on-primary"
                  : "bg-surface-container-lowest border border-outline"
              }`}
              style={card.variant === "dark" ? { backgroundColor: "rgba(196,138,0,0.55)" } : {}}
            >
              <div className="mb-3">
                <p
                  className={`text-xl md:text-5xl font-bold leading-none tracking-tighter ${
                    card.variant === "dark" ? "text-on-primary" : "text-primary"
                  }`}
                >
                  {card.stat}
                  {card.unit}
                </p>
                <div
                  className={`h-px mt-3 ${
                    card.variant === "dark" ? "bg-on-primary/20" : "bg-outline"
                  }`}
                />
              </div>

              <h3
                className={`text-[10px] md:text-lg font-bold mb-1 md:mb-2 ${
                  card.variant === "dark" ? "text-on-primary" : ""
                }`}
              >
                {card.headline}
              </h3>
              <p
                className={`hidden md:block text-sm leading-relaxed mb-4 flex-1 ${
                  card.variant === "dark"
                    ? "text-on-primary/80"
                    : "text-on-surface-variant"
                }`}
              >
                {card.body}
              </p>

              <ul
                className={`hidden md:block space-y-1.5 border-t pt-3 mb-3 ${
                  card.variant === "dark" ? "border-on-primary/20" : "border-outline"
                }`}
              >
                {card.bullets.map((b) => (
                  <li
                    key={b}
                    className={`flex items-center gap-2 text-xs font-medium ${
                      card.variant === "dark" ? "text-on-primary" : ""
                    }`}
                  >
                    <span
                      className={`material-symbols-outlined text-lg ${
                        card.variant === "dark" ? "text-on-primary" : "text-primary"
                      }`}
                    >
                      check_circle
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              <a
                href={card.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`hidden md:inline-flex items-center gap-1 text-xs font-semibold hover:underline ${
                  card.variant === "dark" ? "text-on-primary/90" : "text-primary"
                }`}
              >
                {card.sourceLabel}
                <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
