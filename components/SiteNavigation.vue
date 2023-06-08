<template>
  <nav>
    <ul class="flex space-x-4 text-lg font-bold items-center justify-center text-context decoration-context">
      <li>
        <NuxtLink to="/" class="text-3xl font-bold px-4 py-2 text-context rounded-full border-2 border-context default-focus">
          <span>{{ $config.public.websiteTitle }}</span>
        </NuxtLink>
      </li>
      <li v-for="story in stories" :key="story.id">
        <NuxtLink :to="`/${story.slug}`" class="px-4 py-2 text-context rounded-full border-2 border-context default-focus">
          <span>{{ story.content.navigation_button_text || story.name }}</span>
        </NuxtLink>
      </li>
    </ul>
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
nav a.router-link-active{
  @apply bg-context-text;
  span {
    @apply text-context-background;
  }
}
</style>
