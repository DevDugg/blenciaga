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
      fontSize: {
        TEXT: "12px",
        TITLE: "20px",
        SUBTITLE: "14px",
      },
    },
  },
  plugins: [],
};
export default config;
