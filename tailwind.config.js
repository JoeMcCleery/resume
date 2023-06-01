const textColour = 'rgb(var(--text-colour) / <alpha-value>)'
const backgroundColour = 'rgb(var(--background-colour) / <alpha-value>)'
const lighten = (rgbColour, amount) => `color-mix(in srgb, ${rgbColour}, white ${amount}%)`
const darken = (rgbColour, amount) => `color-mix(in srgb, ${rgbColour}, black ${amount}%)`

module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './utils/**/*.{js,ts}',
    './App.{js,ts,vue}',
    './app.{js,ts,vue}',
    './Error.{js,ts,vue}',
    './error.{js,ts,vue}',
    './app.config.{js,ts}',
    './storyblok/**/*.vue'
  ],
  plugins: [
    require('@headlessui/tailwindcss'),
    require('@tailwindcss/typography')
  ],
  theme: {
    extend: {
      colors: {
        text: {
          DEFAULT: textColour,
          light: lighten(textColour, 10),
          dark: darken(textColour, 10)
        },
        background: {
          DEFAULT: backgroundColour,
          light: lighten(backgroundColour, 10),
          dark: darken(backgroundColour, 10)
        }
      },
      fontFamily:
      {
        roboto: 'Roboto'
      }
    }
  }
}
