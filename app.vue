<template>
  <div :style="cssVars">
    <NuxtLayout :name="pageLayout">
      <NuxtPage @page-layout="updatePageLayout" @page-colours="updatePageColours" />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import './index.d.ts'

const pageLayout = ref('default')
const pageColours = ref({ textColour: '255 255 255', backgroundColour: '128 128 128' })

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
