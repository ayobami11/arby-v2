import type { Config } from "tailwindcss";

import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "brown": "hsl(var(--color-brown))",
      "white": "hsl(var(--color-white))",
      "orange": "hsl(var(--color-orange))",
      "gray": {
        100: "hsl(var(--color-gray-100))",
        300: "hsl(var(--color-gray-300))",
        500: "hsl(var(--color-gray-500))",
        700: "hsl(var(--color-gray-700))",
      },
      "yellow": "hsl(var(--color-yellow))"
    },
    extend: {
      screens: {
        "xs": "480px"
      },
      fontFamily: {
        sans: ["var(--font-sf-pro-display)", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
};
export default config;
