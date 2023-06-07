const textColour = 'rgb(var(--text-colour) / <alpha-value>)'
const backgroundColour = 'rgb(var(--background-colour) / <alpha-value>)'
const textColourDark = 'rgb(var(--text-colour-dark) / <alpha-value>)'
const backgroundColourDark = 'rgb(var(--background-colour-dark) / <alpha-value>)'
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
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        text: {
          DEFAULT: textColour,
          lighter: lighten(textColour, 10),
          darker: darken(textColour, 10)
        },
        background: {
          DEFAULT: backgroundColour,
          lighter: lighten(backgroundColour, 10),
          darker: darken(backgroundColour, 10)
        },
        textDark: {
          DEFAULT: textColourDark,
          lighter: lighten(textColourDark, 10),
          darker: darken(textColourDark, 10)
        },
        backgroundDark: {
          DEFAULT: backgroundColourDark,
          lighter: lighten(backgroundColourDark, 10),
          darker: darken(backgroundColourDark, 10)
        }
      },
      fontFamily: {
        roboto: 'Roboto'
      },
      typography: ({ theme }) => ({
        pink: {
          css: {
            '--tw-prose-body': theme('colors.text'),
            '--tw-prose-headings': theme('colors.text'),
            '--tw-prose-lead': theme('colors.text'),
            '--tw-prose-links': theme('colors.text.darker'),
            '--tw-prose-bold': theme('colors.text'),
            '--tw-prose-counters': theme('colors.text.lighter'),
            '--tw-prose-bullets': theme('colors.text.lighter'),
            '--tw-prose-hr': theme('colors.text.lighter'),
            '--tw-prose-quotes': theme('colors.text'),
            '--tw-prose-quote-borders': theme('colors.background.lighter'),
            '--tw-prose-captions': theme('colors.text'),
            '--tw-prose-code': theme('colors.text'),
            '--tw-prose-pre-code': theme('colors.text'),
            '--tw-prose-pre-bg': theme('colors.background.lighter'),
            '--tw-prose-th-borders': theme('colors.background.lighter'),
            '--tw-prose-td-borders': theme('colors.background.lighter'),
            '--tw-prose-invert-body': theme('colors.textDark'),
            '--tw-prose-invert-headings': theme('colors.textDark'),
            '--tw-prose-invert-lead': theme('colors.textDark'),
            '--tw-prose-invert-links': theme('colors.textDark.darker'),
            '--tw-prose-invert-bold': theme('colors.textDark'),
            '--tw-prose-invert-counters': theme('colors.textDark.lighter'),
            '--tw-prose-invert-bullets': theme('colors.textDark.lighter'),
            '--tw-prose-invert-hr': theme('colors.textDark.lighter'),
            '--tw-prose-invert-quotes': theme('colors.textDark'),
            '--tw-prose-invert-quote-borders': theme('colors.backgroundDark.lighter'),
            '--tw-prose-invert-captions': theme('colors.textDark'),
            '--tw-prose-invert-code': theme('colors.textDark'),
            '--tw-prose-invert-pre-code': theme('colors.textDark'),
            '--tw-prose-invert-pre-bg': theme('colors.backgroundDark.lighter'),
            '--tw-prose-invert-th-borders': theme('colors.backgroundDark.lighter'),
            '--tw-prose-invert-td-borders': theme('colors.backgroundDark.lighter')
          }
        }
      })
    }
  }
}
