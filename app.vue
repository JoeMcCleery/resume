<template>
  <main
    class="relative w-full text-context bg-context"
    :style="cssVars"
  >
    <NuxtLayout :name="pageLayout">
      <NuxtPage @page-layout="updatePageLayout" @page-colours="updatePageColours" />
    </NuxtLayout>
  </main>
</template>

<script setup lang="ts">
import './index.d.ts'

const pageLayout : Ref<MaybeRef<false | 'default'> | ComputedRef<false | 'default'>> = ref('default')
const pageColours = defaultColourContext()

function updatePageLayout (layout: MaybeRef<false | 'default'> | ComputedRef<false | 'default'>) {
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
