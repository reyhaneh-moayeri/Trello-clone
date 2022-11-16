/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/assets/**/*.{vue,js,css}',
    './src/components/**/*.{vue,js}',
    './src/compoables/**/*.{vue,js}',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue',
    './src/plugins/**/*.{js,ts}',
    './src/nuxt.config.{js,ts}',
    './src/app.vue',
    './src/error.vue',
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: 'rgb(23, 43, 77)',
      }
    },
  },
  plugins: [],
}
