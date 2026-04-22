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
      "Gana press seeds at under 40°C using nothing but mechanical force. No steam injection, no pre-heating drum. One pass — the oil that flows is all we keep.",
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
    title: "Filtering",
    headline: "Clean oil, naturally",
    description:
      "We pass the pressed oil through a food-grade filter to remove seed sediment and fine particles. No micro-plastics, no synthetic filter aids — just a clean, clear oil ready for bottling.",
    stat1: { value: "Food-Grade", label: "Filter Only" },
    stat2: { value: "0%", label: "Synthetic Additives" },
    aside: {
      title: "What we never do",
      icon: "warning",
      type: "close",
      items: [
        "No bleaching or deodorising agents",
        "No recycled filter cloth that harbours bacteria",
        "No adulteration with Palm or Argemone oil to lower costs",
      ],
    },
  },
  {
    number: 5,
    title: "Bottling",
    headline: "Sealed for freshness",
    description:
      "After filtering, oil is stored in stainless steel containers until it is poured into food-grade bottles. Bottles are sealed immediately to prevent oxidation. ",
    stat1: { value: "Same Day", label: "Pressed & Bottled" },
    stat2: { value: "Steel", label: "Storage Containers" },
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
    headline: "Across India, through trusted agents",
    description:
      "We reach families across India through our network of local agents in multiple cities. Order via WhatsApp and we'll connect you to the nearest agent or ship directly to your door.",
    stat1: { value: "Pan-India", label: "Delivery" },
    stat2: { value: "1,00,000+", label: "Families Served" },
    aside: {
      title: "How to order",
      icon: "chat",
      type: "check",
      items: [
        "Message us on WhatsApp — no app, no sign-up",
        "Available through agents in multiple cities across India",
        "Bulk & wholesale orders welcome",
      ],
    },
  },
];
