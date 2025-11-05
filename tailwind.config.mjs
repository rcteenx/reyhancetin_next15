/** @type {import('tailwindcss').Config} */
export default {
  safelist: [
    "gradientInstagram",
    "gradientWhatsapp",
    "bgWhite",
    "gradientSlate",
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "2xs": ".60rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "8xl": "6rem",
    },
    extend: {
      fontFamily: {
        base: ["var(--font-base)", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#737373",
        },
        indigo: {
          DEFAULT: "#333366",
          light: {
            1: "#444477",
            2: "#555588",
            3: "#666699",
            4: "#7777AA",
            5: "#8888BB",
          },
          dark: {
            1: "#2A2A5C",
            2: "#1F1F50",
            3: "#141446",
            4: "#0A0A3B",
            5: "#000031",
          },
        },
        accent: {
          DEFAULT: "#FFD700",
        },
        indigo2: "#5b5b84",
        gray40: "#666666",
        "coral-red": "#FF6452",
        "indigo-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
      },
      backgroundImage: (theme) => ({
        space: "url('/assets/images/theme/bg-hero-1920-480.png')",
        hMerhaba: "url('/assets/images/merhaba/home.jpg')",
        rMerhaba: "url('/assets/images/merhaba/reyhan.jpg')",
      }),
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
