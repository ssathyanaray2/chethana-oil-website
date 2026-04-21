import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#c48a00",
        "on-primary": "#ffffff",
        background: "#fffbf0",
        surface: "#fffbf0",
        "surface-container": "#fff8e0",
        "surface-container-low": "#fff8e0",
        "surface-container-lowest": "#ffffff",
        outline: "#f0d88a",
        "outline-variant": "#f0d88a",
        "on-surface": "#3d2600",
        "on-surface-variant": "#5a452a",
        "secondary-container": "#f0d88a",
        "on-secondary-container": "#3d2600",
      },
      fontFamily: {
        headline: ["Epilogue", "sans-serif"],
        body: ["Be Vietnam Pro", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
        full: "9999px",
      },
      boxShadow: {
        sun: "0 20px 40px rgba(196, 138, 0, 0.08)",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
