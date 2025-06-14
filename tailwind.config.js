/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Cascadia Code'],
        serif: [],
        sans: ['Geist', 'DM Sans', 'Lato'],
      }
    },
  },
  plugins: [],
}