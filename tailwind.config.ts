import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // The theme section allows customization of the default Tailwind theme.
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.5rem", //  =>24px
      },
      transtionDuration: 300,
      // colors: {
      //   background: "var(--background)",
      //   foreground: "var(--foreground)",
      // },
    },
  },
  plugins: [],
} satisfies Config;
