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
        rapido: {
          950: "#060D17",
          900: "#0A192F",
          850: "#0D1F38",
          800: "#13253F",
          700: "#1E3A5F",
          600: "#2B4C7E",
        },
        cloud: {
          300: "#7DD3FC",
          400: "#38BDF8",
          500: "#0EA5E9",
          600: "#0284C7",
          700: "#0369A1",
        },
        saffron: {
          300: "#FDBA74",
          400: "#FB923C",
          500: "#EA6320",
          600: "#D9510B",
          700: "#C2410C",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, rgba(14, 165, 233, 0.12) 1px, transparent 1px)",
        'mesh-glow': "radial-gradient(ellipse at 50% 0%, rgba(14, 165, 233, 0.15), transparent 70%)",
      },
    },
  },
  plugins: [],
};
