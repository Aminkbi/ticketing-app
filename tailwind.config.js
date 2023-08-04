/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#5fd3c9",

          secondary: "#f4aa64",

          accent: "#f9818f",

          neutral: "#2a1b2c",

          "base-100": "#3f434a",

          info: "#3665f2",

          success: "#158e72",

          warning: "#f1bb50",

          error: "#de2b2b",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
