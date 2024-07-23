/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-center": "0 0 10px 5px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
