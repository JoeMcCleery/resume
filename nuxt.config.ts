import fetchStories from './fetchStories'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts',
    '@storyblok/nuxt',
    'nuxt-headlessui'
  ],
  runtimeConfig: {
    public: {
      websiteTitle: 'My Website',
      storyblokVersion: 'draft'
    }
  },
  typescript: {
    shim: false,
    typeCheck: true,
    strict: true
  },
  image: {
    storyblok: {
      baseURL: 'https://a.storyblok.com'
    }
  },
  googleFonts: {
    families: {
      Roboto: true
    }
  },
  storyblok: {
    accessToken: process.env.STORYBLOK_ACCESS_TOKEN
  },
  hooks: {
    async 'nitro:config' (nitroConfig) {
      if (!nitroConfig || nitroConfig.dev) {
        return
      }
      const token = process.env.STORYBLOK_ACCESS_TOKEN

      let cacheVersion = 0

      // other routes that are not in Storyblok with their slug.
      const routes = ['/'] // adds home directly but with / instead of /home
      try {
        const result = await fetch(`https://api.storyblok.com/v2/cdn/spaces/me?token=${token}`)

        if (!result.ok) {
          throw new Error('Could not fetch Storyblok data')
        }
        // timestamp of latest publish
        const space = await result.json()
        cacheVersion = space.space.version

        // Recursively fetch all routes and set them to the routes array
        await fetchStories(routes, cacheVersion)
        // Adds the routes to the prerenderer
        nitroConfig.prerender?.routes?.push(...routes)
      } catch (error) {
        console.error(error)
      }
    }
  }
})
