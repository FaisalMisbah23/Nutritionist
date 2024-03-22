/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        indigo: {
          10: "#f6fbe9",
          30: "#d8eda3", // about page boxes
          40: "#346454",
          45: "#468671", // Process green
          50: "#234338",
          80: "#eef8d3", // Green-90 for Pricing Box
          90: "#e1f3b2", // Green for Border
          100: "#e0f2fe",
          200: "#CBEA7B",
          300: "#1A3129",
          400: "#262626",
        },
      },
    },
    plugins: [],
  },
};
