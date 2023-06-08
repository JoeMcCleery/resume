<template>
  <div class="flex justify-center items-center space-x-4">
    <a
      v-for="link in links"
      :key="link._uuid"
      :href="link.link.url"
      :title="link.link.title"
      :rel="link.link.rel"
      :target="link.link.target"
      class="px-4 py-2 text-context rounded-full border-2 border-context default-focus"
    >
      {{ link.link.title }}
    </a>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

const { data } = await useStoryblokApi().getStory('contact-links', {
  version: config.public.storyblokVersion
})

console.log(data)

const links = computed(() => {
  return data.story.content.links
})
</script>
