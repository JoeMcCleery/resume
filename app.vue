<template>
  <div
    class="relative w-full text-text bg-background dark:text-textDark dark:bg-backgroundDark"
    :style="cssVars"
  >
    <NuxtLayout :name="pageLayout">
      <NuxtPage @page-layout="updatePageLayout" @page-colours="updatePageColours" />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import './index.d.ts'

const pageLayout = ref('default')
const pageColours = defaultColourContext()

function updatePageLayout (layout: string) {
  pageLayout.value = layout
}

function updatePageColours (colours: ColourContext) {
  pageColours.value = colours
}

const cssVars = computedCssVars(pageColours)
</script>

<style>
html {
  @apply font-roboto;
}
</style>
