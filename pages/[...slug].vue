<template>
  <div v-if="story">
    <StoryblokComponent :blok="story.content" />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{(e: 'page-layout', layout: string): void, (e: 'page-colours', colours: ColourContext): void}>()

const config = useRuntimeConfig()
const slug = useRoute().params.slug as String[]

const story = await useAsyncStoryblok(
  'pages/' + (slug && slug.length > 0 ? slug.join('/') : 'home'),
  {
    version: config.public.storyblokVersion,
    resolve_links: 'url'
  }
)

if (!story.value) {
  throw createError({
    statusCode: 404,
    fatal: true
  })
}

emit('page-layout', story.value.content.layout)
emit('page-colours', {
  light: {
    textColour: hexToRgb(story.value.content.text_colour.color),
    backgroundColour: hexToRgb(story.value.content.background_colour.color)
  },
  dark: {
    textColour: hexToRgb(story.value.content.text_colour_dark.color),
    backgroundColour: hexToRgb(story.value.content.background_colour_dark.color)
  }
})

const seoTitle = story.value?.content?.seo?.title || config.public.websiteTitle + (slug && slug.length > 0 ? ` - ${slug.join(' - ')}` : '')
const seoDescription = story.value?.content?.seo?.description || ''
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
