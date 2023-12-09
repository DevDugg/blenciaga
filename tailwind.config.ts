import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        BLACK: "#000000",
        WHITE: "#FFFFFF",
        BLUE: "#0066FF",
        GRAY: "#AAAAAC",
      },
      boxShadow: {
        DROPDOWN: "0px 300px 0px 0px rgba(0,0,0,0.5)",
      },
      fontSize: {
        TEXT: "12px",
        TITLE: "20px",
        SUBTITLE: "14px",
      },
      gridTemplateColumns: {
        HEADER: "1fr auto 1fr",
        FOUR: "repeat(4, 1fr)",
        FOUR_PERCENT: "repeat(4, 25%)",
        SIX: "repeat(6, 1fr)",
        THREE_PERCENT: "repeat(3, 33.3333333333333333%)",
        THREE: "repeat(3, 1fr)",
        TWO: "repeat(2, 1fr)",
        TWO_PERCENT: "repeat(2, 50%)",
      },
    },
  },
  plugins: [],
};
export default config;
