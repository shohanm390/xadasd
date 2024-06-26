/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "IBM-plex-sens": " IBM Plex Sans, 'sans-serif'",
        "open-sans": "Open Sans, 'sans-serif'",
      },
    },
  },
  plugins: [],
};
