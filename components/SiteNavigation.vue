<template>
  <nav v-if="story" class="flex justify-center items-center text-context">
    <StoryblokComponent
      v-for="(link,i) in links"
      :key="link._uuid"
      :blok="link"
      class="button no-underline"
      :class="i === 0 ? 'text-3xl font-bold' : 'text-xl'"
      @click="$emit('selectionMade')"
    />
  </nav>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
defineEmits(['selectionMade'])

const story = await useAsyncStoryblok(
  'navigation-links',
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

<style scoped>
nav a.router-link-active {
  @apply bg-context-text text-context-bg shadow-none pointer-events-none;
}
</style>
