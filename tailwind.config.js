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
    require('@headlessui/tailwindcss')
  ],
  theme: {
    colors: {
      text: 'rgb(var(--text-colour) / <alpha-value>)',
      background: 'rgb(var(--background-colour) / <alpha-value>)'
    },
    fontFamily:
    {
      roboto: 'Roboto'
    }
  }
}
