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
        DROPDOWN: "0px 200px 0px 0px rgba(0,0,0,0.5)",
      },
      fontSize: {
        TEXT: "12px",
        TITLE: "20px",
        SUBTITLE: "14px",
      },
      gridTemplateColumns: {
        HEADER: "1fr auto 1fr",
        FOUR: "repeat(4, 25%)",
        SIX: "repeat(6, 1fr)",
        TWO: "repeat(2, 1fr)",
      },
    },
  },
  plugins: [],
};
export default config;
