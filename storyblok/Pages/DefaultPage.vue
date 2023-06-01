<template>
  <div
    v-if="blok"
    v-editable="blok"
  >
    <StoryblokComponent
      v-for="section in blok.sections"
      :key="section._uid"
      :blok="section"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  blok: {
    type: Object,
    required: true
  }
})
</script>
