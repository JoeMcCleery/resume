declare module 'nuxt/schema' {
    interface PublicRuntimeConfig {
        websiteTitle: string,
        storyblokVersion: 'draft' | 'published'
    }
}

declare global {
    interface ColourContext{
        textColour: string,
        backgroundColour: string,
    }
}

export {}