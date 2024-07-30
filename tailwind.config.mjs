/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ocean: "#2E729C",
        forest: "#6F9C2E",
        sand: "#C3B76D",
        taupe: "#7C6A53",
        coffee: "#523527",
        "text-default": "#333",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      backgroundSize: {
        custom: "224px",
      },
    },
  },
  plugins: [],
};
