"use client";

import { useState } from "react";
import { oils } from "@/data/oils";
import { site } from "@/data/site";

type Quantities = Record<string, number>;

export default function WhatsAppOrder() {
  const [quantities, setQuantities] = useState<Quantities>(
    Object.fromEntries(oils.map((o) => [o.slug, 0]))
  );

  function change(slug: string, delta: number) {
    setQuantities((prev) => ({
      ...prev,
      [slug]: Math.max(0, prev[slug] + delta),
    }));
  }

  function buildMessage() {
    const lines = oils
      .filter((o) => quantities[o.slug] > 0)
      .map((o) => `• ${quantities[o.slug]}L ${o.name} — ₹${o.price * quantities[o.slug]}`);
    if (!lines.length) return null;
    return `Hello! I'd like to order from Chetana Cold Pressed Oils:\n\n${lines.join("\n")}\n\nPlease confirm availability and delivery details.`;
  }

  function handleOrder() {
    const msg = buildMessage();
    if (!msg) return;
    window.open(
      `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  }

  const hasItems = oils.some((o) => quantities[o.slug] > 0);

  const previewLines = oils
    .filter((o) => quantities[o.slug] > 0)
    .map((o) => `• ${quantities[o.slug]}L ${o.name}`);

  return (
    <section
      className="py-12 md:py-20 px-4 sm:px-8 bg-surface-container"
      id="order"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
        {/* Quantity selectors */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Build your basket
          </h2>
          <p className="text-on-surface-variant mb-8">
            No complex checkouts. Select what you need and we&apos;ll confirm
            via WhatsApp.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {oils.map((oil) => (
              <div
                key={oil.slug}
                className="bg-surface-container-lowest p-5 rounded-[2rem] border border-outline"
              >
                <p className="font-bold mb-1 text-sm">{oil.name}</p>
                <p className="text-xs text-on-surface-variant mb-4">
                  ₹{oil.price}/{oil.unit}
                </p>
                <div className="flex items-center justify-between bg-surface-container rounded-full p-1 border border-outline">
                  <button
                    onClick={() => change(oil.slug, -1)}
                    className="w-8 h-8 rounded-full bg-white sun-shadow flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    aria-label={`Remove ${oil.name}`}
                  >
                    <span className="material-symbols-outlined text-sm">remove</span>
                  </button>
                  <span
                    className={`font-bold text-sm ${
                      quantities[oil.slug] === 0 ? "text-on-surface-variant opacity-40" : "text-on-surface"
                    }`}
                  >
                    {quantities[oil.slug]}L
                  </span>
                  <button
                    onClick={() => change(oil.slug, 1)}
                    className="w-8 h-8 rounded-full bg-white sun-shadow flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    aria-label={`Add ${oil.name}`}
                  >
                    <span className="material-symbols-outlined text-sm">add</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WhatsApp preview */}
        <div className="bg-[#e5ddd5] p-1 rounded-[3rem] shadow-2xl border border-theme">
          <div className="bg-primary text-white px-6 py-4 rounded-t-[2.8rem] flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <span className="material-symbols-outlined">person</span>
            </div>
            <div>
              <p className="font-bold text-sm">{site.shortName} Cold Press Oils</p>
              <p className="text-[10px] opacity-70">Typically replies instantly</p>
            </div>
          </div>

          <div className="p-5 space-y-3 min-h-[160px] bg-white/10 backdrop-blur-sm">
            {hasItems ? (
              <div className="bg-[#dcf8c6] p-4 rounded-xl rounded-tr-none ml-8 shadow-sm text-sm border border-outline">
                <p className="font-bold text-xs mb-2 text-primary">New Order Request</p>
                <p className="text-on-surface text-sm">Hello! I&apos;d like to order:</p>
                {previewLines.map((line) => (
                  <p key={line} className="text-on-surface text-sm">{line}</p>
                ))}
                <p className="mt-2 text-xs opacity-50 text-right text-on-surface">
                  {new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
            ) : (
              <p className="text-center text-on-surface-variant text-sm pt-8">
                Add oils above to build your order
              </p>
            )}
          </div>

          <div className="p-5 bg-white rounded-b-[2.8rem]">
            <button
              onClick={handleOrder}
              disabled={!hasItems}
              className="w-full bg-primary text-on-primary py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <span className="material-symbols-outlined">send</span>
              {hasItems ? "Send on WhatsApp" : "Select oils to order"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
