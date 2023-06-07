<template>
  <header class="fixed w-full h-24 shadow-lg backdrop-blur-lg z-50">
    <div class="absolute h-full w-full opacity-50 -z-10 bg-background" />
    <div class="relative container p-4 h-full w-full mx-auto flex items-center justify-between space-x-8">
      <div class="flex items-center justify-center space-x-8">
        <NuxtLink to="/">
          <h1 class="text-3xl font-bold">
            {{ $config.public.websiteTitle }}
          </h1>
        </NuxtLink>
        <nav>
          <ul class="flex space-x-4 text-lg font-bold">
            <li v-for="story in stories" :key="story.id">
              <NuxtLink :to="`/${story.slug}`">
                {{ story.content.navigation_button_text || story.name }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <div class="flex items-center justify-center space-x-8">
        <HeadlessSwitch
          v-model="darkModeEnabled"
          :class="darkModeEnabled ? 'bg-teal-900' : 'bg-teal-700'"
          class="relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 ml-auto"
        >
          <span class="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            :class="darkModeEnabled ? 'translate-x-9' : 'translate-x-0'"
            class="pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
          />
        </HeadlessSwitch>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const colourMode = useColorMode()
const config = useRuntimeConfig()
const darkModeEnabled = ref(false)

watch(darkModeEnabled, (enabled) => {
  colourMode.preference = enabled ? 'dark' : 'light'
})

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
