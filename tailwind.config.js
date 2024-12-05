/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "class", // Enable class-based dark mode
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-sf)", "system-ui", "sans-serif"],
        default: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        dark: "#121212", // Custom dark background
        light: "#ffffff", // Custom light background
        accent: "#4A90E2", // Example accent color
        muted: "#6c757d", // For muted text
      },
      animation: {
        // Fade up and down
        "fade-up": "fade-up 0.5s",
        "fade-down": "fade-down 0.5s",
        // Tooltip
        "slide-up-fade": "slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fade": "slide-down-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        // Fade up and down with dark mode support
        "fade-up": {
          "0%": {
            opacity: 0,
            transform: "translateY(10px)",
            backgroundColor: "var(--tw-bg-opacity, 1) rgb(255 255 255 / var(--tw-bg-opacity))", // Light theme
          },
          "80%": {
            opacity: 0.6,
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
            backgroundColor: "var(--tw-bg-opacity, 1) rgb(18 18 18 / var(--tw-bg-opacity))", // Dark theme
          },
        },
        "fade-down": {
          "0%": {
            opacity: 0,
            transform: "translateY(-10px)",
            backgroundColor: "var(--tw-bg-opacity, 1) rgb(255 255 255 / var(--tw-bg-opacity))", // Light theme
          },
          "80%": {
            opacity: 0.6,
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
            backgroundColor: "var(--tw-bg-opacity, 1) rgb(18 18 18 / var(--tw-bg-opacity))", // Dark theme
          },
        },
        // Tooltip with dark mode adjustments
        "slide-up-fade": {
          "0%": { opacity: 0, transform: "translateY(6px)", backgroundColor: "#ffffff" },
          "100%": { opacity: 1, transform: "translateY(0)", backgroundColor: "#121212" },
        },
        "slide-down-fade": {
          "0%": { opacity: 0, transform: "translateY(-6px)", backgroundColor: "#ffffff" },
          "100%": { opacity: 1, transform: "translateY(0)", backgroundColor: "#121212" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    plugin(({ addVariant }) => {
      addVariant("radix-side-top", '&[data-side="top"]');
      addVariant("radix-side-bottom", '&[data-side="bottom"]');
    }),
  ],
};
