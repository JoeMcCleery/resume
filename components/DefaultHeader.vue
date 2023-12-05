<template>
  <header class="fixed w-full h-content min-h-24 backdrop-blur-lg z-50 text-context border-b-2 border-context">
    <div class="absolute h-full w-full opacity-50 -z-10 bg-context" />
    <div class="container p-4 h-full w-full mx-auto flex items-center justify-between">
      <SiteNavigation class="hidden sm:flex space-x-4" />
      <SiteNavigation class="flex flex-col sm:hidden space-y-4" />
      <DarkModeToggle />
    </div>
  </header>
</template>

<script setup lang="ts">
/* import { Bars3Icon } from '@heroicons/vue/24/solid' */
</script>
