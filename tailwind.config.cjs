/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "nexi-task-card":
          "4px 0px 4px rgba(215, 198, 192, 0.25), 0px 4px 4px rgba(215, 198, 192, 0.25)",
      },
      colors: {
        "nexi-indigo-250": "#CCCEEB",
        "nexi-indigo-850": "#3135AB",
        "nexi-warm-gray-350": "#BEBDBD",
        "nexi-blue": "#2D32AA",
        "nexi-blue-trnsp-5": "rgba(45, 50, 170, 0.05)"
      },
    },
  },
  plugins: [],
};
