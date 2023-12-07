<template>
  <div v-if="story" class="flex justify-center items-center space-x-4">
    <StoryblokComponent
      v-for="link in links"
      :key="link._uuid"
      :blok="link"
      class="block px-4 py-2 text-context rounded-full border-2 border-context"
    />
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

const story = await useAsyncStoryblok(
  'contact-links',
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

const links = computed(() => {
  return story.value.content.links
})
</script>
