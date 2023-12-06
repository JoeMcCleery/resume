<template>
  <HeadlessSwitch
    v-if="!colourMode.unknown"
    v-model="darkModeEnabled"
    as="template"
  >
    <button
      :class="darkModeEnabled ? 'bg-gray-500' : 'bg-yellow-500'"
      class="relative inline-flex h-8 w-16 shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out default-focus"
    >
      <span class="sr-only">Use Dark Mode</span>
      <div
        aria-hidden="true"
        :class="darkModeEnabled ? 'translate-x-8' : 'translate-x-0'"
        class="relative pointer-events-none inline-block h-8 w-8 transform rounded-full text-gray-600 bg-white shadow-lg ring-0 transition duration-200 ease-in-out p-1"
      >
        <MoonIcon
          :class="darkModeEnabled ? '' : 'opacity-0'"
          class="transition-opacity duration-200 ease-in-out"
        />
        <SunIcon
          :class="darkModeEnabled ? 'opacity-0' : ''"
          class="absolute top-0 left-0 transition-opacity duration-200 ease-in-out"
        />
      </div>
    </button>
  </HeadlessSwitch>
</template>

<script setup lang="ts">
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid'

const colourMode = useColorMode()
const darkModeEnabled = ref(colourMode.value === 'dark')

// Update colourMode.preference when darkModeEnabled.value changes
watchEffect(() => {
  colourMode.preference = darkModeEnabled.value ? 'dark' : 'light'
})
</script>
