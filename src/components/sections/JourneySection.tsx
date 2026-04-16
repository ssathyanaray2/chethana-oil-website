"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { journeySteps } from "@/data/journeySteps";

const EASE = [0.4, 0, 0.2, 1] as [number, number, number, number];
const STEP_DURATION = 4000;

function OilDrop() {
  return (
    <svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Main body: warm amber-gold, darker at edges */}
        <radialGradient id="od-body" cx="38%" cy="30%" r="68%" gradientUnits="objectBoundingBox">
          <stop offset="0%"   stopColor="#ffe066" />
          <stop offset="30%"  stopColor="#d49a00" />
          <stop offset="65%"  stopColor="#a06800" />
          <stop offset="100%" stopColor="#6b4200" />
        </radialGradient>

        {/* Primary specular — the big bright patch that sells the liquid look */}
        <radialGradient id="od-spec1" cx="33%" cy="26%" r="42%" gradientUnits="objectBoundingBox">
          <stop offset="0%"   stopColor="rgba(255,255,255,0.90)" />
          <stop offset="55%"  stopColor="rgba(255,255,255,0.22)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>

        {/* Warm inner back-light at the bottom of the drop */}
        <radialGradient id="od-warm" cx="55%" cy="80%" r="45%" gradientUnits="objectBoundingBox">
          <stop offset="0%"   stopColor="rgba(255,190,30,0.50)" />
          <stop offset="100%" stopColor="rgba(255,190,30,0)" />
        </radialGradient>

        {/* Soft outer glow */}
        <filter id="od-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Drop body */}
      <path
        d="M11 1C11 1 1 12.5 1 18a10 10 0 0 0 20 0C21 12.5 11 1 11 1Z"
        fill="url(#od-body)"
        filter="url(#od-glow)"
      />

      {/* Warm back-light */}
      <path
        d="M11 1C11 1 1 12.5 1 18a10 10 0 0 0 20 0C21 12.5 11 1 11 1Z"
        fill="url(#od-warm)"
      />

      {/* Large primary specular — rotated ellipse */}
      <ellipse
        cx="7.5" cy="14"
        rx="3.8" ry="6"
        fill="url(#od-spec1)"
        transform="rotate(-28 7.5 14)"
      />

      {/* Small sharp secondary highlight */}
      <ellipse
        cx="7" cy="11.5"
        rx="1.6" ry="2.5"
        fill="rgba(255,255,255,0.55)"
        transform="rotate(-22 7 11.5)"
      />

      {/* Tiny specular pinpoint */}
      <circle cx="6.8" cy="10.2" r="0.9" fill="rgba(255,255,255,0.82)" />
    </svg>
  );
}

export default function JourneySection() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [hasStarted, setHasStarted] = useState(false);

  // Loop: advance every STEP_DURATION, wrapping back to 0
  useEffect(() => {
    if (!isInView || hasStarted) return;
    setHasStarted(true);
    const N = journeySteps.length;
    const id = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % N);
    }, STEP_DURATION);
    return () => clearInterval(id);
  }, [isInView, hasStarted]);

  const step = journeySteps[activeStep];
  const barPct = (activeStep / (journeySteps.length - 1)) * 100;

  return (
    <section
      ref={sectionRef}
      className="bg-surface-container py-12 md:py-20 px-4 sm:px-8"
      id="journey"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            The journey of every drop
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            From the sun-baked farms of Challakere to your kitchen table.
          </p>
        </motion.div>

        {/* ── Stepper ── */}
        <div
          className="overflow-x-auto pb-2 mb-8 md:mb-10"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="relative px-6 md:px-12 min-w-[560px]">
            {/*
              The dot row is a justify-between flex.
              First dot center = 24px from left (half of w-12).
              Last dot center  = 24px from right.
              So we inset the bar by left-6 / right-6 (1.5rem = 24px)
              to align bar start/end with dot centres.
            */}
            <div className="relative flex justify-between">
              {/* Bar lives here — inset to match dot centres */}
              <div className="absolute left-6 right-6 top-6 z-10" style={{ height: 1 }}>
                {/* Track */}
                <div className="absolute inset-0 bg-outline" />

                {/* Fill */}
                <motion.div
                  className="absolute inset-y-0 left-0 bg-primary"
                  animate={{ width: `${barPct}%` }}
                  transition={{ duration: 0.9, ease: EASE }}
                />

                {/* Oil drop — rides the fill, hangs just above the bar */}
                <motion.div
                  className="absolute -translate-x-1/2 z-20"
                  style={{ bottom: "calc(100% + 4px)" }}
                  animate={{ left: `${barPct}%` }}
                  transition={{ duration: 0.9, ease: EASE }}
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    style={{ filter: "drop-shadow(0 3px 5px rgba(196,138,0,0.4))" }}
                  >
                    <OilDrop />
                  </motion.div>
                </motion.div>
              </div>

              {/* Dots */}
              {journeySteps.map((s, i) => {
                const isDone = i < activeStep;
                const isActive = i === activeStep;
                return (
                  <button
                    key={s.number}
                    onClick={() => setActiveStep(i)}
                    className="flex flex-col items-center gap-4"
                  >
                    <div className="relative flex items-center justify-center">
                      {isActive && (
                        <motion.div
                          className="absolute rounded-full border-2 border-primary"
                          style={{ width: 52, height: 52 }}
                          animate={{ scale: [1, 1.55, 1], opacity: [0.65, 0, 0.65] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                      )}
                      <motion.div
                        className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm z-10 relative"
                        animate={{
                          backgroundColor: isDone || isActive ? "#c48a00" : "#ffffff",
                          color: isDone || isActive ? "#ffffff" : "#5a452a",
                          borderColor: isDone || isActive ? "#c48a00" : "#f0d88a",
                          scale: isActive ? 1.08 : 1,
                        }}
                        style={{ border: "2px solid" }}
                        transition={{ duration: 0.35, ease: EASE }}
                      >
                        {isDone ? (
                          <span
                            className="material-symbols-outlined text-[18px]"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            check
                          </span>
                        ) : (
                          s.number
                        )}
                      </motion.div>
                    </div>

                    <motion.span
                      className="text-[10px] font-bold uppercase tracking-widest"
                      animate={{ color: isDone || isActive ? "#c48a00" : "#5a452a" }}
                      transition={{ duration: 0.35 }}
                    >
                      {s.title}
                    </motion.span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Detail card ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 bg-surface-container-lowest rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-8 sun-shadow border border-outline items-start"
          >
            {/* Left */}
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05, duration: 0.3, ease: EASE }}
                className="inline-flex bg-primary text-on-primary px-3 py-0.5 rounded-full text-xs font-bold"
              >
                Step 0{step.number}: {step.title}
              </motion.span>

              <motion.h3
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.35, ease: EASE }}
                className="text-2xl font-bold"
              >
                {step.headline}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.35, ease: EASE }}
                className="text-on-surface-variant text-sm leading-relaxed"
              >
                {step.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.35, ease: EASE }}
                className="flex gap-8 border-t border-outline pt-4"
              >
                <div>
                  <p className="text-2xl font-bold text-primary">{step.stat1.value}</p>
                  <p className="text-xs font-medium text-on-surface-variant">{step.stat1.label}</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">{step.stat2.value}</p>
                  <p className="text-xs font-medium text-on-surface-variant">{step.stat2.label}</p>
                </div>
              </motion.div>
            </div>

            {/* Right */}
            <div className="bg-background p-5 rounded-[1.5rem] border border-outline">
              <motion.h4
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.3, ease: EASE }}
                className="text-primary font-bold flex items-center gap-2 mb-3 text-sm"
              >
                <span className="material-symbols-outlined text-[18px]">
                  {step.aside.icon}
                </span>
                {step.aside.title}
              </motion.h4>

              <div className="space-y-3">
                {step.aside.items.map((item, idx) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + idx * 0.09, duration: 0.3, ease: EASE }}
                    className="flex items-start gap-3"
                  >
                    <span
                      className="material-symbols-outlined text-primary mt-0.5 text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {step.aside.type === "close" ? "cancel" : "check_circle"}
                    </span>
                    <p className="text-sm text-on-surface">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
