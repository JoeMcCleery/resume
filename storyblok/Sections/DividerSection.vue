<template>
  <SectionContainer
    v-if="blok"
    v-editable="blok"
    :blok="blok"
    class="flex justify-center items-center"
    :style="`height: ${blok.height/4}rem`"
  >
    <hr class="w-full border-context">
  </SectionContainer>
</template>

<script setup lang="ts">
defineProps({
  blok: {
    type: Object,
    required: true
  }
})
</script>
