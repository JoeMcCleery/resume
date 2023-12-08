const textColourAlpha = 'rgb(var(--text-colour) / <alpha-value>)'
const textColour = 'rgb(var(--text-colour))'
const backgroundColourAlpha = 'rgb(var(--bg-colour) / <alpha-value>)'
const backgroundColour = 'rgb(var(--bg-colour))'
const textColourDarkAlpha = 'rgb(var(--text-colour-dark) / <alpha-value>)'
const textColourDark = 'rgb(var(--text-colour-dark))'
const backgroundColourDarkAlpha = 'rgb(var(--bg-colour-dark) / <alpha-value>)'
const backgroundColourDark = 'rgb(var(--bg-colour-dark))'
const lightenAlpha = (rgbColour, amount) => `color-mix(in srgb, ${rgbColour}, rgb(255 255 255 / <alpha-value>) ${amount}%)`
const darkenAlpha = (rgbColour, amount) => `color-mix(in srgb, ${rgbColour}, rgb(0 0 0 / <alpha-value>) ${amount}%)`
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
          DEFAULT: textColourAlpha,
          lighter: lightenAlpha(textColourAlpha, 20),
          darker: darkenAlpha(textColourAlpha, 20)
        },
        bg: {
          DEFAULT: backgroundColourAlpha,
          lighter: lightenAlpha(backgroundColourAlpha, 20),
          darker: darkenAlpha(backgroundColourAlpha, 20)
        },
        textDark: {
          DEFAULT: textColourDarkAlpha,
          lighter: lightenAlpha(textColourDarkAlpha, 20),
          darker: darkenAlpha(textColourDarkAlpha, 20)
        },
        bgDark: {
          DEFAULT: backgroundColourDarkAlpha,
          lighter: lightenAlpha(backgroundColourDarkAlpha, 20),
          darker: darkenAlpha(backgroundColourDarkAlpha, 20)
        }
      },
      fontFamily: {
        roboto: 'Roboto'
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': textColour,
            '--tw-prose-headings': textColour,
            '--tw-prose-lead': textColour,
            '--tw-prose-links': darken(textColour, 20),
            '--tw-prose-bold': textColour,
            '--tw-prose-counters': lighten(textColour, 20),
            '--tw-prose-bullets': lighten(textColour, 20),
            '--tw-prose-hr': lighten(textColour, 20),
            '--tw-prose-quotes': textColour,
            '--tw-prose-quote-borders': lighten(textColour, 20),
            '--tw-prose-captions': textColour,
            '--tw-prose-code': lighten(textColour, 20),
            '--tw-prose-pre-code': lighten(textColour, 90),
            '--tw-prose-pre-bg': darken(backgroundColour, 70),
            '--tw-prose-th-borders': lighten(textColour, 20),
            '--tw-prose-td-borders': lighten(textColour, 20),
            '--tw-prose-invert-body': textColourDark,
            '--tw-prose-invert-headings': textColourDark,
            '--tw-prose-invert-lead': textColourDark,
            '--tw-prose-invert-links': darken(textColourDark, 20),
            '--tw-prose-invert-bold': textColourDark,
            '--tw-prose-invert-counters': darken(textColourDark, 20),
            '--tw-prose-invert-bullets': darken(textColourDark, 20),
            '--tw-prose-invert-hr': darken(textColourDark, 20),
            '--tw-prose-invert-quotes': textColourDark,
            '--tw-prose-invert-quote-borders': darken(textColourDark, 20),
            '--tw-prose-invert-captions': textColourDark,
            '--tw-prose-invert-code': darken(textColourDark, 20),
            '--tw-prose-invert-pre-code': lighten(textColourDark, 20),
            '--tw-prose-invert-pre-bg': darken(backgroundColourDark, 20),
            '--tw-prose-invert-th-borders': darken(textColourDark, 20),
            '--tw-prose-invert-td-borders': darken(textColourDark, 20)
          }
        }
      }
    }
  }
}
