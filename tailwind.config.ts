import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"', 'sans-serif'
        ],
      },
      colors: {
        'primary-hover': '#FFFFFF29',
        secondary: "#E6E953",
        'secondary-hover': '#A3A53B'
    },
    },
  },
  plugins: [],
} satisfies Config;
