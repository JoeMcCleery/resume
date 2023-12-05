<template>
  <nav class="flex justify-center items-center text-context decoration-context">
    <div>
      <NuxtLink to="/" class="block text-3xl font-bold px-4 py-2 text-context rounded-full border-2 border-context default-focus">
        <span>{{ $config.public.websiteTitle }}</span>
      </NuxtLink>
    </div>
    <div v-for="story in stories" :key="story.id">
      <NuxtLink :to="`/${story.slug}`" class="block px-4 py-2 text-context rounded-full border-2 border-context default-focus">
        {{ story.content.navigation_button_text || story.name }}
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

const { data } = await useStoryblokApi().getStory('navigation-config', {
  resolve_relations: [
    'pages'
  ],
  version: config.public.storyblokVersion
})

const stories = computed(() => {
  return data.story.content.pages.map((uuid: string) => data.rels.find(story => story.uuid === uuid))
})
</script>

<style scoped>
nav a.router-link-active {
  @apply bg-context-text;
  @apply text-context-bg;
}
</style>
