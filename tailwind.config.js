/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#071B35",
          "navy-dark": "#05152A",
          "navy-light": "#0B264A",
          blue: "#0879B9",
          teal: "#00BFC0",
          "teal-dark": "#00A3A4",
          aqua: "#27DEC5",
          bg: "#F8FAFC",
          text: "#101828",
          muted: "#64748B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "sans-serif"],
      },
      boxShadow: {
        "card-soft": "0 10px 30px -5px rgba(7, 27, 53, 0.05), 0 4px 12px -2px rgba(7, 27, 53, 0.03)",
        "card-hover": "0 20px 40px -10px rgba(0, 191, 192, 0.12), 0 8px 16px -4px rgba(7, 27, 53, 0.06)",
        "pricing-dark": "0 20px 50px -10px rgba(7, 27, 53, 0.35)",
        "glow-teal": "0 0 30px rgba(0, 191, 192, 0.25)",
      },
    },
  },
  plugins: [],
};
