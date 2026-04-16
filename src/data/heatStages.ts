export type HeatStage = {
  id: string;
  name: string;
  subtitle: string;
  temp: string;
  retentionLabel: string;
  retentionPct: number; // for bar width
  color: string;
  thermoFill: string; // percentage height of thermometer
  badge?: string;
};

export const heatStages: HeatStage[] = [
  {
    id: "cold-press",
    name: "Cold Press",
    subtitle: "Gold Standard",
    temp: "<40°C",
    retentionLabel: "100%",
    retentionPct: 100,
    color: "#c48a00",
    thermoFill: "18%",
    badge: "Gold Standard",
  },
  {
    id: "warm-press",
    name: "Warm Press",
    subtitle: "Semi-industrial",
    temp: "40–80°C",
    retentionLabel: "60–75%",
    retentionPct: 67,
    color: "#f97316",
    thermoFill: "42%",
  },
  {
    id: "hot-press",
    name: "Hot Press",
    subtitle: "Standard refined",
    temp: "80–150°C",
    retentionLabel: "15–35%",
    retentionPct: 25,
    color: "#ef4444",
    thermoFill: "68%",
  },
  {
    id: "industrial",
    name: "Industrial",
    subtitle: "Chemically refined",
    temp: "150–240°C",
    retentionLabel: "0–5%",
    retentionPct: 3,
    color: "#dc2626",
    thermoFill: "92%",
  },
];
