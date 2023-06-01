<template>
  <footer class="relative w-full h-24 bg-background-dark">
    <div class="container p-4 h-full mx-auto flex items-center justify-start space-x-8">
      <p>Footer Text</p>
    </div>
  </footer>
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
