"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

const EASE = [0.4, 0, 0.2, 1] as [number, number, number, number];

export default function FAQSection() {
  const t = useTranslations("faq");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const items = t.raw("items") as { q: string; a: string }[];

  return (
    <section className="bg-surface-container py-16 md:py-20 px-4 sm:px-8 relative overflow-hidden" id="faq">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "url('/images/faq_bg_texture.webp')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.12 }} />
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-10 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            {t("heading")}
          </h2>
          <p className="text-on-surface-variant">
            {t("subheading")}
          </p>
        </motion.div>

        <div className="space-y-3">
          {items.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: EASE }}
                className="bg-surface-container-lowest border border-outline rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full flex items-center gap-4 p-4 text-left"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? "bg-primary text-on-primary" : "bg-primary/10 text-primary"}`}>
                    <span className="material-symbols-outlined text-[18px]">
                      {isOpen ? "remove" : "add"}
                    </span>
                  </div>
                  <span className="font-semibold text-sm md:text-base flex-1">{faq.q}</span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                    >
                      <p className="pl-[3.75rem] pr-5 pb-5 text-sm text-on-surface-variant leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
