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
    colors: {
      text: 'rgb(var(--text-colour) / <alpha-value>)',
      background: 'rgb(var(--background-colour) / <alpha-value>)'
    },
    fontFamily:
    {
      roboto: 'Roboto'
    },
    extend: {
      typography: theme => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': `brightness(${theme('colors.text')}, 0.7)`,
            '--tw-prose-headings': `brightness(${theme('colors.text')}, 0.9)`,
            '--tw-prose-lead': `brightness(${theme('colors.text')}, 0.6)`,
            '--tw-prose-links': `brightness(${theme('colors.text')}, 0.9)`,
            '--tw-prose-bold': `brightness(${theme('colors.text')}, 0.9)`,
            '--tw-prose-counters': `brightness(${theme('colors.text')}, 0.5)`,
            '--tw-prose-bullets': `brightness(${theme('colors.text')}, 0.3)`,
            '--tw-prose-hr': `brightness(${theme('colors.text')}, 0.2)`,
            '--tw-prose-quotes': `brightness(${theme('colors.text')}, 0.9)`,
            '--tw-prose-quote-borders': `brightness(${theme('colors.text')}, 0.2)`,
            '--tw-prose-captions': `brightness(${theme('colors.text')}, 0.5)`,
            '--tw-prose-code': `brightness(${theme('colors.text')}, 0.9)`,
            '--tw-prose-pre-code': `brightness(${theme('colors.text')}, 0.2)`,
            '--tw-prose-pre-bg': `brightness(${theme('colors.background')}, 0.8)`,
            '--tw-prose-th-borders': `brightness(${theme('colors.text')}, 0.3)`,
            '--tw-prose-td-borders': `brightness(${theme('colors.text')}, 0.2)`,
            '--tw-prose-invert-body': `brightness(${theme('colors.text')}, 0.3)`,
            '--tw-prose-invert-headings': `brightness(${theme('colors.text')}, 1)`,
            '--tw-prose-invert-lead': `brightness(${theme('colors.text')}, 0.4)`,
            '--tw-prose-invert-links': `brightness(${theme('colors.text')}, 1)`,
            '--tw-prose-invert-bold': `brightness(${theme('colors.text')}, 1)`,
            '--tw-prose-invert-counters': `brightness(${theme('colors.text')}, 0.4)`,
            '--tw-prose-invert-bullets': `brightness(${theme('colors.text')}, 0.6)`,
            '--tw-prose-invert-hr': `brightness(${theme('colors.text')}, 0.7)`,
            '--tw-prose-invert-quotes': `brightness(${theme('colors.text')}, 0.1)`,
            '--tw-prose-invert-quote-borders': `brightness(${theme('colors.text')}, 0.7)`,
            '--tw-prose-invert-captions': `brightness(${theme('colors.text')}, 0.4)`,
            '--tw-prose-invert-code': `brightness(${theme('colors.text')}, 1)`,
            '--tw-prose-invert-pre-code': `brightness(${theme('colors.text')}, 0.3)`,
            '--tw-prose-invert-pre-bg': `opacity(brightness(${theme('colors.background')}, 0.8), 0.5)`,
            '--tw-prose-invert-th-borders': `brightness(${theme('colors.text')}, 0.6)`,
            '--tw-prose-invert-td-borders': `brightness(${theme('colors.text')}, 0.7)`
          }
        }
      })
    }
  }
}
