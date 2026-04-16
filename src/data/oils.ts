export type Oil = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  unit: string;
  badge: string;
  emoji: string;
  image: string;
  benefits: string[];
  bestFor: string[];
  smokePoint: string;
  available: boolean;
};

export const oils: Oil[] = [
  {
    slug: "groundnut",
    name: "Groundnut Oil",
    tagline: "Challakere's finest cold pressed groundnut oil",
    description:
      "Pressed from locally sourced groundnuts grown in the rich red soil of Challakere. Deep nutty aroma, high smoke point — ideal for everyday Indian cooking.",
    price: 380,
    unit: "1L",
    badge: "Heart Healthy",
    emoji: "🥜",
    image: "/images/bottle-1l.jpeg",
    benefits: ["Rich in Vitamin E", "High smoke point", "Natural antioxidants", "No cholesterol"],
    bestFor: ["Deep frying", "Tadkas", "Marinades", "Everyday cooking"],
    smokePoint: "232°C",
    available: true,
  },
  {
    slug: "sesame",
    name: "Sesame Oil",
    tagline: "Traditional cold pressed gingelly oil from Karnataka",
    description:
      "Traditional gingelly oil with a rich golden colour and deep sesame flavour. Used in South Indian cuisine for generations — perfect for massages and authentic cooking.",
    price: 450,
    unit: "1L",
    badge: "Skin & Bone",
    emoji: "🫘",
    image: "/images/bottle-5l.jpeg",
    benefits: ["Anti-inflammatory", "Rich in calcium", "Good for joints", "Skin nourishment"],
    bestFor: ["South Indian cooking", "Massages", "Pickling", "Seasoning"],
    smokePoint: "177°C",
    available: true,
  },
  {
    slug: "coconut",
    name: "Coconut Oil",
    tagline: "Cold pressed coconut oil from sun-dried copra",
    description:
      "Made from sun-dried copra with a sweet, fresh coconut aroma. Cooling properties make it ideal for both cooking and hair and skin care.",
    price: 420,
    unit: "1L",
    badge: "Metabolism",
    emoji: "🥥",
    image: "/images/bottle-1l.jpeg",
    benefits: ["Medium chain fatty acids", "Antimicrobial", "Boosts metabolism", "Hair & skin care"],
    bestFor: ["South Indian desserts", "Hair oiling", "Skin care", "Baking"],
    smokePoint: "177°C",
    available: true,
  },
  {
    slug: "mustard",
    name: "Mustard Oil",
    tagline: "Cold pressed mustard oil — strong, pure, traditional",
    description:
      "Strong pungency and characteristic bite. Cold pressed to retain glucosinolates and natural compounds. Ideal for pickling and North Indian cooking.",
    price: 290,
    unit: "1L",
    badge: "Digestion",
    emoji: "🌿",
    image: "/images/bottle-5l.jpeg",
    benefits: ["Glucosinolates", "Natural preservative", "Antibacterial", "Digestive aid"],
    bestFor: ["Pickling", "North Indian cooking", "Massage", "Hair growth"],
    smokePoint: "250°C",
    available: true,
  },
];
