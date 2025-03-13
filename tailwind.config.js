/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007bff",
        secondary: "#6610f2",
        accent: "#ffb703",
        background: "#f8f9fa",
        dark: "#222",
        light: "#ffffff",
      },
      fontFamily: {
        body: ["Poppins", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        soft: "0px 4px 6px rgba(223, 5, 5, 0.1)",
        strong: "0px 8px 16px rgba(0, 0, 0, 0.2)",
      },
      borderRadius: {
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // Better form styling
    require("@tailwindcss/typography"), // Enhanced typography
    require("@tailwindcss/aspect-ratio"), // Responsive image aspect ratios
  ],
};
