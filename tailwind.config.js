/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/src/assets/images/collection-background.svg')",
        'card': "url('/src/assets/images/thumbnail-background.svg')",
      },
    },
  },
  plugins: [],
}