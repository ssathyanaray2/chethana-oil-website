"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const leftPills = [
  { icon: "thermostat", label: "Cold Pressed", sub: "Below 40°C" },
  { icon: "science", label: "100% Natural", sub: "No chemicals" },
];

const rightPills = [
  { icon: "eco", label: "Farm Sourced", sub: "Challakere" },
  { icon: "verified", label: "FSSAI Certified", sub: "Quality assured" },
];

const EASE = [0.4, 0, 0.2, 1] as [number, number, number, number];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: EASE },
});

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-12 px-4 sm:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left — text */}
        <div className="space-y-6">
          <motion.div {...fadeUp(0.1)}>
            <span className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
              <span className="material-symbols-outlined text-[16px]">location_on</span>
              Challakere, Karnataka
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.2)}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight"
          >
            Oils pressed <br />
            <span className="text-primary">the way nature</span>
            <br />intended.
          </motion.h1>

          <motion.p {...fadeUp(0.3)} className="text-on-surface-variant text-lg leading-relaxed max-w-md">
            Cold pressed below 40°C. No heat, no chemicals, no compromise.
            Every drop carries the full nutrition of the seed it came from.
          </motion.p>

          <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-3">
            <Link
              href="/#order"
              className="bg-primary text-on-primary px-7 py-3.5 rounded-full font-bold text-sm flex items-center gap-2 hover:opacity-90 transition-opacity sun-shadow"
            >
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
              Order via WhatsApp
            </Link>
            <Link
              href="/oils"
              className="border border-outline text-on-surface px-7 py-3.5 rounded-full font-bold text-sm hover:border-primary hover:text-primary transition-colors"
            >
              Browse Oils
            </Link>
          </motion.div>

          {/* Trust bar */}
          <motion.div {...fadeUp(0.5)} className="flex gap-6 pt-2">
            {[
              { val: "7+", label: "Years crafting" },
              { val: "10K+", label: "Families" },
              { val: "9+", label: "Varieties" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-primary">{stat.val}</p>
                <p className="text-xs text-on-surface-variant">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — image + floating pills */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          className="relative flex justify-center"
        >
          {/* Left pills */}
          <div className="hidden md:flex absolute -left-8 top-8 flex-col gap-3 z-10">
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
                src="/images/hero-character.png"
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
      </div>
    </section>
  );
}
