<template>
  <SectionContainer
    v-if="blok"
    v-editable="blok"
    :blok="blok"
    class="section justify-center items-center"
  >
    <div
      class="w-full h-8 rounded-full neumorphic-inset"
    />
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
