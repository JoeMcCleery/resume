<template>
  <nuxt-img
    v-if="image.id"
    provider="storyblok"
    format="webp"
    :src="image.filename"
    :title="image.title"
    :alt="image.alt"
    :copyright="image.copyright"
    :source="image.source"
  />
</template>

<script setup lang="ts">
defineProps({
  image: {
    type: Object,
    required: true
  }
})
</script>
