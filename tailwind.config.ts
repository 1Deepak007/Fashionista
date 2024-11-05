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
        primary: '#A45286',
        primarybtn: '#C168A1',
        secondary: '#FFE3EF',
        background: '#F6F7F2',
      },
    },
  },
  plugins: [],
};
export default config;
