import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "dot-pattern": "url('/dot.svg')",
      },
      boxShadow: {
        solid: "3px 3px 0px 1px",
      },
      animation: {
        box: "move-box 100ms forwards",
      },
      keyframes: {
        "move-box": {
          to: { transform: "translateX(-3px) translateY(-2px)" },
        },
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      chivo: ["Chivo", "mono"],
      dm: ["DM", "serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
