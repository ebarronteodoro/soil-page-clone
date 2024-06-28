/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        robotoMono: ["Roboto Mono Variable", "monospace"],
        rossanova: ["Rossanova", "sans-serif"],
        rossanovaMedium: ["Rossanova-medium", "sans-serif"],
        rossanovaBold: ["Rossanova-bold", "sans-serif"],
        amina: ["Amina", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
