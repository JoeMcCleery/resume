<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup lang="ts">
const emit = defineEmits<{(e: 'pageLayout', layout: string): void, (e: 'pageColours', colours: ColourContext): void}>()

const config = useRuntimeConfig()
const slug = useRoute().params.slug as String[]

const story = await useAsyncStoryblok(
  'pages/' + (slug && slug.length > 0 ? slug.join('/') : 'home'),
  { // API Options
    version: config.public.storyblokVersion,
    resolve_links: 'url'
  },
  { // Bridge Options
    resolveLinks: 'url'
  }
)

if (story.value.status) {
  throw createError({
    statusCode: story.value.status,
    statusMessage: story.value.response
  })
}

emit('pageLayout', story.value.content.layout)
emit('pageColours', {
  light: {
    textColour: hexToRgb(story.value.content.text_colour.color),
    backgroundColour: hexToRgb(story.value.content.background_colour.color)
  },
  dark: {
    textColour: hexToRgb(story.value.content.text_colour_dark.color),
    backgroundColour: hexToRgb(story.value.content.background_colour_dark.color)
  }
})

const seoTitle = story.value.content.seo.title || config.public.websiteTitle + (slug && slug.length > 0 ? ` - ${slug.join(' - ')}` : '')
const seoDescription = story.value.content.seo.description || ''
useSeoMeta({
  title: seoTitle,
  ogTitle: seoTitle,
  description: seoDescription,
  ogDescription: seoDescription,
  ogImage: ''
})

definePageMeta({
  layout: false
})
</script>
