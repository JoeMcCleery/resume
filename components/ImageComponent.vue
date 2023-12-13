<template>
  <NuxtImg
    v-if="image.id"
    provider="storyblok"
    format="webp"
    :src="image.filename"
    :title="image.title"
    :alt="image.alt"
    :copyright="image.copyright"
    :source="image.source"
    densities="x1 x2"
    :sizes="sizes"
  />
</template>

<script setup lang="ts">
defineProps({
  image: {
    type: Object,
    required: true
  },
  sizes: {
    type: String,
    required: false,
    default: ''
  }
})
</script>
