<template>
  <header class="w-full h-24 shadow-lg fixed backdrop-blur-lg z-50">
    <div class="absolute h-full w-full opacity-20 -z-10 bg-background" />
    <div class="container p-4 h-full mx-auto flex items-center justify-between">
      <NuxtLink to="/">
        <h1 class="text-3xl font-bold">
          {{ $config.public.websiteTitle }}
        </h1>
      </NuxtLink>
      <nav>
        <ul class="flex space-x-8 text-lg font-bold">
          <li v-for="story in data.stories" :key="story.id">
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

const { data } = await useStoryblokApi().getStories({
  starts_with: 'pages/',
  filter_query: {
    show_navigation_link: {
      in: true
    }
  },
  version: config.public.storyblokVersion
})
</script>

<style scoped>
nav a.router-link-active {
  @apply underline underline-offset-4 decoration-4 decoration-text;
}
</style>
