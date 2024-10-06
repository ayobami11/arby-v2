import type { Config } from "tailwindcss";

import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
      screens: {
        "xs": "480px"
      },
      fontFamily: {
        sans: ["var(--font-sf-pro-display)", ...defaultTheme.fontFamily.sans]
      },
      cursor: {
        "custom": "url(/assets/icons/custom-cursor.svg), pointer"
      }
    },
  },
  plugins: [],
};
export default config;
