export type ScienceCard = {
  stat: string;
  unit?: string;
  headline: string;
  body: string;
  bullets: string[];
  sourceLabel: string;
  sourceUrl: string;
  variant: "light" | "dark";
};

export const scienceCards: ScienceCard[] = [
  {
    stat: "<40",
    unit: "°C",
    headline: "Extraction temperature",
    body: "Cold pressing keeps the oil below 40°C throughout. This is the critical threshold — above it, heat-sensitive vitamins and fatty acids begin to degrade.",
    bullets: ["Vitamin E preserved", "Omega fatty acids intact", "Natural flavour retained"],
    sourceLabel: "Read the science",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/22648724",
    variant: "light",
  },
  {
    stat: "0",
    unit: "",
    headline: "Chemicals used",
    body: "Industrial oils use Hexane — a petroleum-derived solvent — to extract every last drop. We use only mechanical pressure. Nothing else enters our oil.",
    bullets: ["No Hexane", "No synthetic additives", "No bleaching agents"],
    sourceLabel: "Read the science",
    sourceUrl:
      "https://www.theexamination.org/articles/processing-agent-hexane-found-in-everyday-foods-renewing-concerns-about-toxic-chemical",
    variant: "dark",
  },
  {
    stat: "100",
    unit: "%",
    headline: "Nutrients intact",
    body: "Cold pressing preserves vitamins and antioxidants that are otherwise destroyed in industrial heating processes above 150°C.",
    bullets: ["Rich in Polyphenols", "Bio-available Vitamins", "Natural antioxidants"],
    sourceLabel: "Read the science",
    sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9030854",
    variant: "light",
  },
];
