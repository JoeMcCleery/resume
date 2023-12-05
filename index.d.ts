declare module 'nuxt/schema' {
    interface PublicRuntimeConfig {
        websiteTitle: string,
        storyblokVersion: 'draft' | 'published'
    }
}

declare global {
    interface ColourContext{
        light: {
            textColour: string,
            backgroundColour: string
        },
        dark: {
            textColour: string,
            backgroundColour: string
        }
    }
}

export {}