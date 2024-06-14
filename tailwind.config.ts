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
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      chivo: ["Chivo", "mono"],
      dm: ["DM", "serif"]
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],

};
export default config;
