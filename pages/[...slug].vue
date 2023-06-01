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
  { version: config.public.storyblokVersion }
)

emit('page-layout', story.value.content.layout)
emit('page-colours', {
  textColour: hexToRgb(story.value.content.text_colour.color),
  backgroundColour: hexToRgb(story.value.content.background_colour.color)
})

useSeoMeta({
  title: story.value?.content?.seo?.title || config.public.websiteTitle + (slug && slug.length > 0 ? ` - ${slug.join(' - ')}` : ''),
  ogTitle: story.value?.content?.seo?.title || config.public.websiteTitle + (slug && slug.length > 0 ? ` - ${slug.join(' - ')}` : ''),
  description: story.value?.content?.seo?.description || '',
  ogDescription: story.value?.content?.seo?.description || '',
  ogImage: ''
})

definePageMeta({
  layout: false
})
</script>
