<template>
  <header class="fixed w-full backdrop-blur-lg z-50 text-context border-b border-context-bg-darker border-opacity-20">
    <div class="absolute h-full w-full opacity-80 -z-10 bg-context" />
    <div class="container w-full mx-auto flex flex-col">
      <div class="p-4 flex w-full items-center justify-between h-24">
        <button
          class="sm:hidden button"
          @click="showNav = !showNav"
        >
          <span>Menu</span>
          <Bars3Icon
            class="ml-2 h-8 w-8"
            aria-hidden="true"
          />
        </button>
        <SiteNavigation class="hidden sm:flex space-x-4" />
        <DarkModeToggle />
      </div>
      <div
        class="sm:hidden justify-center items-center w-full p-4 border-t border-context-bg-darker"
        :class="showNav ? 'flex' : 'hidden'"
      >
        <SiteNavigation
          class="flex-col space-y-4"
          @selection-made="showNav = false"
        />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Bars3Icon } from '@heroicons/vue/24/solid'

const showNav = ref(false)
</script>
