"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { scienceCards } from "@/data/science";
import { heatStages } from "@/data/heatStages";

const EASE = [0.4, 0, 0.2, 1] as [number, number, number, number];

export default function ScienceSection() {
  const [activeIdx, setActiveIdx] = useState(-1);
  const heatRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heatRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;
    const timers = heatStages.map((_, i) =>
      setTimeout(() => setActiveIdx(i), i * 900)
    );
    return () => timers.forEach(clearTimeout);
  }, [isInView]);

  const active = activeIdx >= 0 ? heatStages[activeIdx] : null;

  return (
    <section className="bg-surface-container py-12 md:py-20 px-4 sm:px-8" id="why">
      <div className="max-w-7xl mx-auto">

        {/* ── Science stat cards ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-8 md:mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            The science of cold extraction
          </h2>
          <p className="text-on-surface-variant text-lg max-w-2xl">
            Three numbers that explain why cold pressed oil is not just a
            preference — it&apos;s chemistry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14 md:mb-20">
          {scienceCards.map((card, i) => (
            <motion.div
              key={card.headline}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: EASE }}
              className={`rounded-[1.5rem] p-5 md:p-6 flex flex-col sun-shadow ${
                card.variant === "dark"
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container-lowest border border-outline"
              }`}
            >
              <div className="mb-3">
                <p
                  className={`text-4xl md:text-5xl font-bold leading-none tracking-tighter ${
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
                className={`text-base md:text-lg font-bold mb-2 ${
                  card.variant === "dark" ? "text-on-primary" : ""
                }`}
              >
                {card.headline}
              </h3>
              <p
                className={`text-sm leading-relaxed mb-4 flex-1 ${
                  card.variant === "dark"
                    ? "text-on-primary/80"
                    : "text-on-surface-variant"
                }`}
              >
                {card.body}
              </p>

              <ul
                className={`space-y-1.5 border-t pt-3 mb-3 ${
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
                className={`inline-flex items-center gap-1 text-xs font-semibold hover:underline ${
                  card.variant === "dark" ? "text-on-primary/90" : "text-primary"
                }`}
              >
                {card.sourceLabel}
                <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
              </a>
            </motion.div>
          ))}
        </div>

        {/* ── Heat paradox ── */}
        <div ref={heatRef}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-6 md:mb-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              The heat paradox
            </h3>
            <p className="text-on-surface-variant max-w-2xl">
              The more heat you add, the more oil you get — but the less nutrition
              remains. We choose nutrition over yield.
            </p>
          </motion.div>

          <div className="flex gap-4 md:gap-6 items-stretch">
            {/* Thermometer */}
            <div className="hidden lg:flex flex-col items-center gap-3 shrink-0 w-12">
              <div className="relative flex-1 w-full bg-surface-container-lowest rounded-full overflow-hidden border border-outline flex flex-col justify-end">
                <div className="absolute inset-0 flex flex-col justify-between py-3 pointer-events-none">
                  {[...Array(7)].map((_, i) => (
                    <div
                      key={i}
                      className={`${i % 2 === 0 ? "w-3" : "w-2"} h-px ml-auto mr-1`}
                      style={{
                        background:
                          i % 2 === 0 ? "rgba(240,216,138,0.6)" : "rgba(240,216,138,0.4)",
                      }}
                    />
                  ))}
                </div>
                <motion.div
                  className="w-full"
                  style={{ background: "linear-gradient(to top, #c48a00, #f97316, #dc2626)" }}
                  animate={{ height: active?.thermoFill ?? "0%" }}
                  transition={{ duration: 0.7, ease: EASE }}
                />
                <motion.div
                  className="absolute bottom-0 w-full h-10 rounded-full flex items-center justify-center"
                  animate={{ backgroundColor: active?.color ?? "#c48a00" }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                >
                  <div className="w-5 h-5 rounded-full bg-white/20" />
                </motion.div>
              </div>
              <div className="text-center shrink-0">
                <motion.p
                  className="text-sm font-bold leading-none"
                  animate={{ color: active?.color ?? "#c48a00" }}
                  transition={{ duration: 0.4 }}
                >
                  {active?.temp ?? "—"}
                </motion.p>
                <p className="text-[9px] text-on-surface-variant mt-1 font-medium">
                  {active?.name ?? "Scroll"}
                </p>
              </div>
            </div>

            {/* 4 square cards */}
            <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {heatStages.map((stage, i) => {
                const state =
                  activeIdx === -1
                    ? "pending"
                    : i === activeIdx
                    ? "active"
                    : i < activeIdx
                    ? "visited"
                    : "pending";

                return (
                  <motion.div
                    key={stage.id}
                    className="aspect-square rounded-[1.25rem] border-2 p-4 flex flex-col justify-between cursor-pointer select-none"
                    style={{ borderColor: stage.color }}
                    animate={{
                      opacity: state === "active" ? 1 : state === "visited" ? 0.58 : 0.42,
                      scale: state === "active" ? 1 : 0.95,
                      backgroundColor: state === "active" ? "#fffbf0" : "#ffffff",
                      boxShadow:
                        state === "active"
                          ? "0 8px 32px rgba(196,138,0,0.14)"
                          : "none",
                    }}
                    transition={{ duration: 0.45, ease: EASE }}
                    onClick={() => setActiveIdx(i)}
                  >
                    <div>
                      <p
                        className="text-[10px] font-bold uppercase tracking-widest"
                        style={{ color: stage.color }}
                      >
                        {stage.name}
                      </p>
                      <span
                        className="text-[9px] font-medium mt-1 block"
                        style={{
                          color:
                            stage.subtitle === "Gold Standard"
                              ? stage.color
                              : "#5a452a",
                        }}
                      >
                        {stage.subtitle}
                      </span>
                    </div>

                    <p
                      className="text-xl md:text-2xl font-bold text-center"
                      style={{ color: stage.color }}
                    >
                      {stage.temp}
                    </p>

                    <div>
                      <div className="flex justify-between text-[9px] mb-1.5">
                        <span className="text-on-surface-variant">Retained</span>
                        <span className="font-bold" style={{ color: stage.color }}>
                          {stage.retentionLabel}
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: stage.color }}
                          initial={{ width: "0%" }}
                          animate={{ width: isInView ? `${stage.retentionPct}%` : "0%" }}
                          transition={{ duration: 0.9, delay: i * 0.1, ease: EASE }}
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
