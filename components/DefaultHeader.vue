<template>
  <header class="fixed w-full h-24 shadow-lg backdrop-blur-lg z-50">
    <div class="absolute h-full w-full opacity-50 -z-10 bg-context" />
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
          v-if="!colourMode.unknown"
          v-slot="{ checked }"
          as="template"
          :default-checked="colourMode.value === 'dark'"
          @update:model-value="checked => colourMode.preference = checked ? 'dark' : 'light'"
        >
          <button
            :class="checked ? 'bg-gray-500' : 'bg-yellow-500'"
            class="relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 ml-auto"
          >
            <span class="sr-only">Use Dark Mode</span>
            <div
              aria-hidden="true"
              :class="checked ? 'translate-x-9' : 'translate-x-0'"
              class="relative pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full text-gray-700 bg-white shadow-lg ring-0 transition duration-200 ease-in-out p-1"
            >
              <MoonIcon
                :class="checked ? '' : 'opacity-0'"
                class="transition-opacity duration-200 ease-in-out"
              />
              <SunIcon
                :class="checked ? 'opacity-0' : ''"
                class="absolute top-0 left-0 transition-opacity duration-200 ease-in-out"
              />
            </div>
          </button>
        </HeadlessSwitch>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid'

const colourMode = useColorMode()
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
  @apply underline underline-offset-4 decoration-4 decoration-context;
}
</style>
