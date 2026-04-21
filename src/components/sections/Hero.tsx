"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { site } from "@/data/site";

const EASE = [0.4, 0, 0.2, 1] as [number, number, number, number];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: EASE },
});

export default function Hero() {
  const t = useTranslations("hero");

  const leftPills = [
    { icon: "thermostat", label: t("pills.coldPressed.label"), sub: t("pills.coldPressed.sub") },
    { icon: "science", label: t("pills.natural.label"), sub: t("pills.natural.sub") },
  ];

  const rightPills = [
    { icon: "eco", label: t("pills.farmSourced.label"), sub: t("pills.farmSourced.sub") },
    { icon: "verified", label: t("pills.localSeeds.label"), sub: t("pills.localSeeds.sub") },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-start lg:items-center pt-20 pb-12 px-4 sm:px-8 overflow-hidden">
      {/*
        Mobile:  text(1) → image(2) → ctas+stats(3)
        Desktop: [text+ctas+stats | image] two-col
      */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[auto_auto] gap-8 lg:gap-x-20 lg:gap-y-0 items-start lg:items-center">

        {/* 1 — Eyebrow + headline + lede */}
        <div className="space-y-5 order-1 lg:col-start-1 lg:row-start-1">
          <motion.div {...fadeUp(0.1)}>
            <span className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
              <span className="material-symbols-outlined text-[16px]">location_on</span>
              {t("eyebrow")}
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.2)}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight"
          >
            {t("headingLine1")} <br />
            <span className="text-primary">{t("headingAccent")}</span>
            <br />{t("headingLine3")}
          </motion.h1>

          <motion.p {...fadeUp(0.3)} className="text-on-surface-variant text-lg leading-relaxed max-w-md">
            {t("lede")}
          </motion.p>
        </div>

        {/* 2 — Image (mobile: between text and CTAs; desktop: right col spanning both rows) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          className="relative flex justify-center order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2"
        >
          {/* Left pills */}
          <div className="hidden md:flex absolute -left-3 top-8 flex-col gap-3 z-10">
            {leftPills.map((pill, i) => (
              <motion.div
                key={pill.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.5, ease: EASE }}
                className="bg-surface-container-lowest sun-shadow border border-outline rounded-2xl px-4 py-2.5 flex items-center gap-2.5"
              >
                <span className="material-symbols-outlined text-primary text-[18px]">{pill.icon}</span>
                <div>
                  <p className="text-xs font-bold text-on-surface">{pill.label}</p>
                  <p className="text-[10px] text-on-surface-variant">{pill.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Hero image */}
          <div className="relative w-full max-w-sm mx-auto">
            <div className="bg-surface-container rounded-[3rem] overflow-hidden border border-outline sun-shadow aspect-[3/4] flex items-center justify-center">
              <Image
                src="/images/hero-character.webp"
                alt="Chetana Cold Pressed Oil bottle"
                width={400}
                height={540}
                className="object-contain w-full h-full"
                priority
              />
            </div>
          </div>

          {/* Right pills */}
          <div className="hidden md:flex absolute -right-4 bottom-12 flex-col gap-3 z-10">
            {rightPills.map((pill, i) => (
              <motion.div
                key={pill.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.15, duration: 0.5, ease: EASE }}
                className="bg-surface-container-lowest sun-shadow border border-outline rounded-2xl px-4 py-2.5 flex items-center gap-2.5"
              >
                <span className="material-symbols-outlined text-primary text-[18px]">{pill.icon}</span>
                <div>
                  <p className="text-xs font-bold text-on-surface">{pill.label}</p>
                  <p className="text-[10px] text-on-surface-variant">{pill.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 3 — CTAs + stats (mobile: after image; desktop: bottom of left col) */}
        <div className="space-y-5 order-3 lg:col-start-1 lg:row-start-2">
          <motion.div {...fadeUp(0.4)} className="space-y-2">
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi! I'd like to order Chetana cold pressed oil.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-on-primary px-7 py-3.5 rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity sun-shadow"
              >
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                {t("orderCta")}
              </a>
              <Link
                href="/#oils"
                className="border border-outline text-on-surface px-7 py-3.5 rounded-full font-bold text-sm flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                {t("browseCta")}
              </Link>
            </div>
            <p className="text-xs text-on-surface-variant pl-1">
              {t("orCall")}{" "}
              <a href={`tel:${site.phone}`} className="font-semibold text-on-surface hover:text-primary transition-colors">
                {site.phone}
              </a>
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.5)} className="flex gap-6 pt-2">
            {(["years", "families", "varieties"] as const).map((key) => (
              <div key={key}>
                <p className="text-3xl font-bold text-black text-on-surface">{t(`stats.${key}.value`)}</p>
                <p className="text-xs font-semibold text-on-surface-variant">{t(`stats.${key}.label`)}</p>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
