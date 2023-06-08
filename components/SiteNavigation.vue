<template>
  <nav>
    <ul class="flex space-x-4 text-lg font-bold items-center justify-center text-context decoration-context">
      <li>
        <NuxtLink to="/" class="no-underline">
          <h1 class="text-3xl font-bold">
            {{ $config.public.websiteTitle }}
          </h1>
        </NuxtLink>
      </li>
      <li v-for="story in stories" :key="story.id">
        <NuxtLink :to="`/${story.slug}`">
          {{ story.content.navigation_button_text || story.name }}
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
nav a.router-link-active:not(.no-underline){
  @apply underline underline-offset-4 decoration-4;
}
</style>
