<template>
  <header class="fixed w-full h-24 shadow-lg backdrop-blur-lg z-50">
    <div class="absolute h-full w-full opacity-50 -z-10 bg-background" />
    <div class="relative container p-4 h-full mx-auto flex items-center justify-start space-x-8">
      <NuxtLink to="/">
        <h1 class="text-3xl font-bold">
          {{ $config.public.websiteTitle }}
        </h1>
      </NuxtLink>
      <nav>
        <ul class="flex space-x-8 text-lg font-bold">
          <li v-for="story in stories" :key="story.id">
            <NuxtLink :to="`/${story.slug}`">
              {{ story.content.navigation_button_text || story.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
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
  @apply underline underline-offset-4 decoration-4 decoration-text;
}
</style>
