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
    image: "/images/oilimages/groundnut.jpeg",
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
    image: "/images/oilimages/sesame.jpeg",
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
    image: "/images/oilimages/coconut.jpeg",
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
    image: "/images/oilimages/mustard.jpeg",
    benefits: ["Glucosinolates", "Natural preservative", "Antibacterial", "Digestive aid"],
    bestFor: ["Pickling", "North Indian cooking", "Massage", "Hair growth"],
    smokePoint: "250°C",
    available: true,
  },
  {
    slug: "sunflower",
    name: "Sunflower Oil",
    tagline: "Light cold pressed sunflower oil from Karnataka",
    description:
      "Light, mild flavour with a high Vitamin E content. Versatile for everyday cooking and baking with a neutral taste that doesn't overpower dishes.",
    price: 320,
    unit: "1L",
    badge: "Vitamin E Rich",
    emoji: "🌻",
    image: "/images/oilimages/sunflower.jpeg",
    benefits: ["High Vitamin E", "Low saturated fat", "Light on digestion", "Neutral flavour"],
    bestFor: ["Baking", "Salad dressings", "Stir fry", "Everyday cooking"],
    smokePoint: "227°C",
    available: true,
  },
  {
    slug: "safflower",
    name: "Safflower Oil",
    tagline: "Cold pressed safflower oil — light and heart healthy",
    description:
      "One of the lightest cold pressed oils with a high oleic content. Great for heart health and weight management with a clean, neutral taste.",
    price: 350,
    unit: "1L",
    badge: "Heart Healthy",
    emoji: "🌼",
    image: "/images/oilimages/safflower.jpeg",
    benefits: ["High oleic acid", "Lowers cholesterol", "Anti-inflammatory", "Light texture"],
    bestFor: ["Salads", "Sautéing", "Skin care", "Low-calorie cooking"],
    smokePoint: "212°C",
    available: true,
  },
  {
    slug: "castor",
    name: "Castor Oil",
    tagline: "Pure cold pressed castor oil for wellness",
    description:
      "Thick, nourishing castor oil cold pressed to retain ricinoleic acid. Widely used for hair growth, skin care, and traditional wellness practices.",
    price: 280,
    unit: "500ml",
    badge: "Hair & Skin",
    emoji: "🌱",
    image: "/images/oilimages/castor.jpeg",
    benefits: ["Ricinoleic acid", "Deep moisturising", "Promotes hair growth", "Anti-fungal"],
    bestFor: ["Hair oiling", "Skin care", "Eyebrow growth", "Joint massage"],
    smokePoint: "—",
    available: true,
  },
  {
    slug: "nigerseed",
    name: "Niger Seed Oil",
    tagline: "Rare cold pressed niger seed oil from Karnataka",
    description:
      "A rare and nutritious oil pressed from niger seeds. Rich in linoleic acid with a distinctive nutty flavour, popular in Karnataka and Andhra Pradesh cuisine.",
    price: 480,
    unit: "1L",
    badge: "Rare & Nutritious",
    emoji: "🫙",
    image: "/images/oilimages/nigerseed.jpeg",
    benefits: ["High linoleic acid", "Rich in antioxidants", "Anti-inflammatory", "Rare variety"],
    bestFor: ["Traditional cooking", "Chutneys", "Seasoning", "Regional dishes"],
    smokePoint: "210°C",
    available: true,
  },
  {
    slug: "deepam",
    name: "Deepam Oil",
    tagline: "Pure cold pressed lamp oil for pooja",
    description:
      "Traditional lamp oil cold pressed for use in diyas and pooja rituals. Pure, clean burning with a sacred significance in Indian households.",
    price: 220,
    unit: "500ml",
    badge: "Pooja & Ritual",
    emoji: "🪔",
    image: "/images/oilimages/deepam.webp",
    benefits: ["Pure & unadulterated", "Clean burning", "Traditional blend", "Sacred use"],
    bestFor: ["Diya lamps", "Pooja rituals", "Festivals", "Daily worship"],
    smokePoint: "—",
    available: true,
  },
];
