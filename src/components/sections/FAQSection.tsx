"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.4, 0, 0.2, 1] as [number, number, number, number];

const faqs = [
  {
    q: "What does 'cold pressed' actually mean?",
    a: "Cold pressing extracts oil using only mechanical pressure, keeping temperatures below 40°C throughout. This preserves the natural vitamins, antioxidants, and flavour that are destroyed when heat or chemicals are used in industrial extraction.",
  },
  {
    q: "How is Chetana oil different from supermarket oils?",
    a: "Supermarket oils are typically extracted using hexane (a petroleum solvent) at temperatures above 150°C, then bleached and deodorised. Chetana oils are single-ingredient — just the seed, cold pressed. Nothing added, nothing removed.",
  },
  {
    q: "How do I order?",
    a: "We take orders via WhatsApp. Just tap the 'Order via WhatsApp' button, send us your requirement, and we'll confirm availability and delivery details. We deliver within Challakere and surrounding areas.",
  },
  {
    q: "How long does the oil stay fresh?",
    a: "Cold pressed oils have a natural shelf life of 6–9 months when stored in a cool, dark place. Unlike refined oils, ours have no preservatives — so proper storage matters. Keep the cap tight and away from direct sunlight.",
  },
  {
    q: "Can I use cold pressed oil for high-heat cooking?",
    a: "It depends on the oil. Groundnut and mustard oils have high smoke points (230°C+) and are great for frying. Sesame and coconut oils are better for medium heat. We recommend using each oil within its smoke point for best nutrition and flavour.",
  },
  {
    q: "Are the seeds sourced locally?",
    a: "Yes. We source seeds directly from farmers in and around Challakere, Karnataka. This keeps quality consistent and supports local agriculture. For some varieties, we work with the same farming families every season.",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="bg-surface-container py-16 md:py-20 px-4 sm:px-8" id="faq">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-10 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Frequently asked questions
          </h2>
          <p className="text-on-surface-variant">
            Everything you need to know about cold pressed oils and how we work.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
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
