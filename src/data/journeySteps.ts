export type JourneyStep = {
  number: number;
  title: string;
  headline: string;
  description: string;
  stat1: { value: string; label: string };
  stat2: { value: string; label: string };
  aside: {
    title: string;
    icon: string;
    type: "check" | "close";
    items: string[];
  };
};

export const journeySteps: JourneyStep[] = [
  {
    number: 1,
    title: "Seed Sourcing",
    headline: "Traceable to the farm",
    description:
      "We source directly from verified farmers in Challakere and surrounding taluks. No middlemen, no commodity brokers. We know the field every seed comes from.",
    stat1: { value: "Challakere", label: "Origin Region" },
    stat2: { value: "0", label: "Middlemen" },
    aside: {
      title: "Why direct sourcing matters",
      icon: "eco",
      type: "check",
      items: [
        "Freshness guaranteed — seeds reach us within days of harvest",
        "Fair prices directly to the farmer, no price exploitation",
        "Variety-specific sourcing for the right oil profile",
      ],
    },
  },
  {
    number: 2,
    title: "Seed Cleaning",
    headline: "Pure before it's pressed",
    description:
      "Every batch is manually sorted and cleaned. Dust, stones, broken seeds and foreign material are removed. We run the seeds through two cleaning passes — wet wash and dry sieve.",
    stat1: { value: "2×", label: "Cleaning Passes" },
    stat2: { value: "0", label: "Impurities" },
    aside: {
      title: "What we remove",
      icon: "filter_alt",
      type: "close",
      items: [
        "Dust and soil particles from field storage",
        "Broken or shrivelled seeds that yield poor oil",
        "Foreign material including stones and husk fragments",
      ],
    },
  },
  {
    number: 3,
    title: "Cold Press",
    headline: "Slow. Steady. Unheated.",
    description:
      "Our expeller presses seeds at under 40°C using nothing but mechanical force. No steam injection, no pre-heating drum. One pass — the oil that flows is all we keep.",
    stat1: { value: "<40°C", label: "Max Temperature" },
    stat2: { value: "100%", label: "Nutrients Intact" },
    aside: {
      title: "What cold press preserves",
      icon: "science",
      type: "check",
      items: [
        "Omega-3 and Omega-6 fatty acids in natural ratio",
        "Fat-soluble vitamins: A, D, E, K",
        "Polyphenols and natural antioxidants",
      ],
    },
  },
  {
    number: 4,
    title: "Natural Settling",
    headline: "Gravity is our only filter",
    description:
      "We don't force our oil through micro-plastics or high-pressure filters. We let it rest in stainless steel containers for 48 hours. Heavy sediments settle naturally.",
    stat1: { value: "48h", label: "Resting Time" },
    stat2: { value: "0%", label: "Micro-plastics" },
    aside: {
      title: "What we never do",
      icon: "warning",
      type: "close",
      items: [
        "Filter cloth recycling — harbors bacteria if not cleaned with harsh chemicals",
        "Adulteration with Palm or Argemone oil to lower costs",
      ],
    },
  },
  {
    number: 5,
    title: "Bottling",
    headline: "Sealed for freshness",
    description:
      "Oil is poured into food-grade containers on the same day as pressing. Bottles are sealed immediately to prevent oxidation. No warehouse sitting. No re-bottling.",
    stat1: { value: "Same Day", label: "Pressed & Bottled" },
    stat2: { value: "FSSAI", label: "Certified" },
    aside: {
      title: "Our packaging promise",
      icon: "inventory_2",
      type: "check",
      items: [
        "Food-grade containers — no leaching, no chemical transfer",
        "Tamper-proof seals so you know it's untouched",
        "Available in 500ml, 1L, and 5L sizes",
      ],
    },
  },
  {
    number: 6,
    title: "Your Kitchen",
    headline: "Straight to your doorstep",
    description:
      "Orders are dispatched within 24 hours via WhatsApp. For Challakere locals, same-day delivery. For pan-India, we ship in insulated packaging to protect freshness.",
    stat1: { value: "24h", label: "Dispatch Time" },
    stat2: { value: "10,000+", label: "Families Served" },
    aside: {
      title: "How to order",
      icon: "chat",
      type: "check",
      items: [
        "Message us on WhatsApp — no app, no sign-up",
        "Pay after confirmation — COD available locally",
        "Bulk & wholesale orders welcome",
      ],
    },
  },
];
