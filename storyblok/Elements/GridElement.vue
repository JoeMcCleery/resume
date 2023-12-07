<template>
  <div
    v-if="blok"
    v-editable="blok"
  >
    <div v-if="blok.content.length > 0" class="w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      <StoryblokComponent
        v-for="element in blok.content"
        :key="element._uid"
        :blok="element"
      />
    </div>
  </div>
</template>

<script setup lang='ts'>
defineProps({
  blok: {
    type: Object,
    required: true
  }
})
</script>
